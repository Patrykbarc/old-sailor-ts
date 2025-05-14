# Old Sailor Barber

Welcome to the Old Sailor Barber project! This is a web application for a barbershop that combines nautical themes with grooming services. The application provides information about the barbershop, its services, and allows users to contact the barbershop for inquiries.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Deployment
[Old Sailor Barber](https://old-sailor-barber.netlify.app/)

## Features

- **About Us Section**: Learn about the history and services of Old Sailor Barber.
- **Contact Form**: Users can reach out with inquiries or appointment requests.
- **Privacy Policy**: Information on how user data is collected and used.
- **Responsive Design**: The application is designed to work on various devices.

## Technologies Used

- **Frontend**: React, Next.js, TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Form Handling**: React Hook Form
- **Data Validation**: Zod
- **Image Handling**: Next.js Image component

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/old-sailor-barber.git
   ```

2. Navigate to the project directory:

   ```bash
   cd old-sailor-barber
   ```

3. Install the dependencies:

   ```bash
   pnpm install
   ```

4. Set up environment variables:
   Create a `.env.local` file in the root directory and add your environment variables.

   ### Explanation of Variables:

- `NEXT_PUBLIC_SHOPIFY_PUBLIC_API_URL`: The public API URL for Shopify.
- `NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN`: The access token for Shopify Storefront API.
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`: The site key for Google reCAPTCHA, which is necessary for forms that require bot protection.
- `RECAPTCHA_SECRET_KEY`: The secret key for Google reCAPTCHA, which is necessary for forms that require bot protection.

Make sure to replace the placeholder values with your actual configuration values. If you have additional services or configurations, feel free to add more variables as needed.

## Usage

To run the application in development mode, use the following command:

```bash
pnpm run dev
```

Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.
