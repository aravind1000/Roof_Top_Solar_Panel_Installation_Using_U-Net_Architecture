# Roof Top Solar Panel Installation Using U-Net Architecture

## Overview

This project focused on segmenting solar panels from aerial imagery using the U-Net deep learning model to precisely identify and extract solar panel regions. The U-Net architecture is designed for precise image segmentation, featuring an encoder-decoder structure with skip connections. The encoder captures hierarchical features through convolutional layers and max-pooling, while the decoder reconstructs the image with transposed convolutions to identify the solar panels accurately. Skip connections help retain spatial details, improving segmentation quality.

## Requirements

- Python 3
- PyTorch
- NumPy
- Matplotlib

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/aravind1000/Deep_Solar_Segmentation_Using_U-Net_Architecture.git
    ```
2. Install the require dependencies:

   ```bash
   pip install -r requirements.txt
   ```
3. Run the train.py script to train the U-Net model:

    ```bash
    python train.py
    ```

4. To run it:
   
   ```bash
    python run.py
    ```
