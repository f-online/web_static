#!/bin/bash

# Replace this with your actual Google Sheets CSV export URL.
GOOGLE_SHEET_URL="https://docs.google.com/spreadsheets/d/1j9Vs5ndIRCIGWSb-h6T305_OD8G12h04PXcabKGFMAQ/export?format=csv"

# Directory to save the thumbnails
OUTPUT_DIR="./static/thumbnails/"

# Create the directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# Fetch the Google Sheet as CSV
curl -sL "$GOOGLE_SHEET_URL" -o sheet.csv

# Process the CSV file
# Assuming the first row is a header and video URLs are in the second column
awk -F, 'NR>1 {print $2}' sheet.csv | while read -r video_url; do
    if [[ -n "$video_url" ]]; then
        # Extract the video ID from the URL (assuming standard YouTube link format)
        video_id=$(echo "$video_url" | sed -E 's/.*(v=|youtu.be\/|embed\/)([a-zA-Z0-9_-]{11}).*/\2/')
        
        # Check if a valid video ID was extracted
        if [[ ${#video_id} -eq 11 ]]; then
            # Construct the thumbnail URL
            thumbnail_url="https://img.youtube.com/vi/$video_id/maxresdefault.jpg"
            
            # Download the thumbnail image
            output_file="$OUTPUT_DIR/$video_id.jpg"
            echo "Fetching thumbnail for video ID: $video_id"
            curl -s -o "$output_file" "$thumbnail_url"
            
            # Check if download was successful
            if [[ -s "$output_file" ]]; then
                echo "Thumbnail saved as $output_file"
            else
                echo "Failed to fetch thumbnail for video ID: $video_id"
                rm -f "$output_file"  # Remove empty file if failed
            fi
        else
            echo "Invalid video URL: $video_url"
        fi
    fi
done

echo "Thumbnail fetching complete."