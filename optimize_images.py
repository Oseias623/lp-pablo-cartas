import os
from PIL import Image

def optimize_image(input_path, output_path, max_width=None, quality=80):
    try:
        with Image.open(input_path) as img:
            # Convert to RGB if necessary (e.g. for PNGs with transparency if saving as JPEG, though WebP handles it)
            # img = img.convert('RGB') 
            
            if max_width and img.width > max_width:
                # Calculate height to keep aspect ratio
                ratio = max_width / img.width
                new_height = int(img.height * ratio)
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
            
            img.save(output_path, 'WEBP', quality=quality)
            print(f"Saved {output_path}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

# Process Hero Image
input_hero = 'assets/bundle-mockup.png'
if os.path.exists(input_hero):
    # Desktop version (800px width)
    optimize_image(input_hero, 'assets/hero-desktop.webp', max_width=800, quality=85)
    # Mobile version (480px width)
    optimize_image(input_hero, 'assets/hero-mobile.webp', max_width=480, quality=80)
else:
    print(f"File not found: {input_hero}")

# Optional: Convert other heavy assets if they exist
assets_to_convert = [
    'assets/ebook-mockup.png', 
    'assets/collection-mockup.png',
    'assets/author-portrait.png',
    'assets/author-portrait-v2.png'
]

for asset in assets_to_convert:
    if os.path.exists(asset):
        filename = os.path.basename(asset)
        name, _ = os.path.splitext(filename)
        optimize_image(asset, f'assets/{name}.webp', max_width=800, quality=80)
