import os
from PIL import Image

# Ensure public directory exists
if not os.path.exists('public'):
    os.makedirs('public')

def optimize_image(input_path, output_filename, max_width=None, quality=80):
    try:
        with Image.open(input_path) as img:
            output_path = os.path.join('public', output_filename)
            
            if max_width and img.width > max_width:
                # Calculate height to keep aspect ratio
                ratio = max_width / img.width
                new_height = int(img.height * ratio)
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
            
            # Save as WebP
            img.save(output_path, 'WEBP', quality=quality)
            print(f"Saved {output_path}")

    except Exception as e:
        print(f"Error processing {input_path}: {e}")

# Process Hero Image
input_hero = 'assets/bundle-mockup.png'
if os.path.exists(input_hero):
    # Desktop version (800px width)
    optimize_image(input_hero, 'hero-desktop.webp', max_width=800, quality=75)
    # Mobile version (480px width) - Critical for Mobile Score
    optimize_image(input_hero, 'hero-mobile.webp', max_width=480, quality=70) 
else:
    print(f"File not found: {input_hero}")


