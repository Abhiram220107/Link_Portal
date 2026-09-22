import sys
import os
import qrcode
from PIL import Image

def generate_code_f1_qr(target_url, output_path="code_f1_qr.png", logo_path="public/logos/code-f1-logo.png"):
    print(f"Generating QR Code for: {target_url}")
    
    # Configure QR code with High Error Correction (level H allows ~30% damage/embedded logo)
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=15,
        border=4,
    )
    qr.add_data(target_url)
    qr.make(fit=True)

    # Generate QR image (Dark theme colors: dark background/orange or clean white/black for 100% scan reliability)
    # We create high-contrast black on white for maximum camera readability
    qr_img = qr.make_image(fill_color="#0B0E14", back_color="#FFFFFF").convert("RGBA")

    # If Code F1 logo exists, embed it cleanly in the center
    if os.path.exists(logo_path):
        logo = Image.open(logo_path).convert("RGBA")
        
        # Calculate logo size: ~22% of QR width
        qr_width, qr_height = qr_img.size
        logo_max_size = int(qr_width * 0.22)
        
        # Resize logo keeping aspect ratio
        logo.thumbnail((logo_max_size, logo_max_size), Image.Resampling.LANCZOS)
        
        # Create a white background padding behind the logo for contrast
        padding = 10
        bg_size = (logo.size[0] + padding * 2, logo.size[1] + padding * 2)
        logo_bg = Image.new("RGBA", bg_size, (255, 255, 255, 255))
        
        # Paste logo on white background
        logo_bg.paste(logo, (padding, padding), mask=logo)
        
        # Center position
        pos = ((qr_width - logo_bg.size[0]) // 2, (qr_height - logo_bg.size[1]) // 2)
        
        # Paste onto QR
        qr_img.paste(logo_bg, pos)
        print("Embedded official Code F1 logo into QR center.")

    qr_img.save(output_path, "PNG")
    print(f"Saved high-resolution QR Code to: {os.path.abspath(output_path)}")
    return output_path

if __name__ == "__main__":
    if len(sys.argv) > 1:
        url = sys.argv[1].strip()
    else:
        # Prompt or fallback
        url = input("Enter permanent website URL: ").strip()
        if not url:
            url = "https://codef1-links.vercel.app"

    generate_code_f1_qr(url)
