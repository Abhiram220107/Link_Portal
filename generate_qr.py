import sys
import os
import qrcode
from PIL import Image, ImageDraw

def generate_code_f1_qr(target_url, output_path="code_f1_qr.png", logo_path="public/logos/code-f1-logo.png"):
    print(f"Generating QR Code for: {target_url}")
    
    # Configure QR code with High Error Correction (level H allows ~30% damage/embedded logo)
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=16,
        border=4,
    )
    qr.add_data(target_url)
    qr.make(fit=True)

    # Generate high-contrast black on white QR image for maximum scanning reliability
    qr_img = qr.make_image(fill_color="#0B0E14", back_color="#FFFFFF").convert("RGBA")
    qr_w, qr_h = qr_img.size

    # Embed smooth curved-edge Code F1 logo badge in the center
    if os.path.exists(logo_path):
        # Badge size: ~25% of QR width
        badge_size = int(qr_w * 0.25)
        radius = int(badge_size * 0.26)

        # Load master logo and crop exact F1 glyph
        logo = Image.open(logo_path).convert("RGBA")
        glyph = logo.crop((190, 345, 1025, 910))

        glyph_target_w = int(badge_size * 0.78)
        glyph_aspect = glyph.height / glyph.width
        glyph_target_h = int(glyph_target_w * glyph_aspect)
        glyph_resized = glyph.resize((glyph_target_w, glyph_target_h), Image.Resampling.LANCZOS)

        # Create pure white card with smooth curved edges and orange border
        badge = Image.new("RGBA", (badge_size, badge_size), (0, 0, 0, 0))
        badge_draw = ImageDraw.Draw(badge)
        badge_draw.rounded_rectangle(
            [0, 0, badge_size - 1, badge_size - 1],
            radius=radius,
            fill=(255, 255, 255, 255),
            outline=(255, 87, 34, 255),
            width=4
        )

        glyph_x = (badge_size - glyph_target_w) // 2
        glyph_y = (badge_size - glyph_target_h) // 2
        badge.paste(glyph_resized, (glyph_x, glyph_y))

        # Mask for badge with curved corners
        mask = Image.new("L", (badge_size, badge_size), 0)
        mask_draw = ImageDraw.Draw(mask)
        mask_draw.rounded_rectangle([0, 0, badge_size - 1, badge_size - 1], radius=radius, fill=255)

        # Paste directly onto QR code
        pos_badge = ((qr_w - badge_size) // 2, (qr_h - badge_size) // 2)
        qr_img.paste(badge, pos_badge, mask=mask)
        print("Embedded curved-edge Code F1 logo into QR center.")

    qr_img.save(output_path, "PNG")
    print(f"Saved high-resolution QR Code to: {os.path.abspath(output_path)}")
    return output_path

if __name__ == "__main__":
    if len(sys.argv) > 1:
        url = sys.argv[1].strip()
    else:
        url = "https://linkportal-mu.vercel.app/"

    generate_code_f1_qr(url)
