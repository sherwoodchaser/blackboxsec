# BlackBoxSec Framework

**BlackBoxSec Framework** is a browser extension designed for bug bounty hunters to streamline reconnaissance tasks. By providing a target URL, the extension opens multiple subdomain enumeration and endpoint discovery services in new tabs, saving time and effort.

## Features

- **Subdomain Enumeration**:
  - Google Subdomain Search
  - Google Sub-subdomain Search
  - PHP Subdomains via Google
  - CRT.sh Subdomain Enumeration
  - Yandex Subdomain Search
  - Bing Subdomain Search
  - Other Subdomain Search Engines

- **Endpoint Discovery**:
  - Utilize the Internet Archive (Wayback Machine) for endpoint analysis.

## How It Works

1. Enter a target domain or URL in the input field.
2. Click any of the available buttons to open the respective service in a new tab.
3. The selected service will perform its specific reconnaissance task, such as searching for subdomains or finding endpoints.

## Supported Tools and Services
```
-----------------------------------------------------------------------------------------------------
| Button                        | Service/Tool Description                                          |
|-------------------------------|-------------------------------------------------------------------|
| **Google Subdomains**         | Uses Google search to identify subdomains.                        |
| **Google Sub-subdomains**     | Searches for nested subdomains using Google.                      |
| **Google PHP Subdomains**     | Finds PHP-related subdomains via Google.                          |
| **CRT.sh Subdomains**         | Queries [CRT.sh](https://crt.sh/) for SSL certificate subdomains. |
| **Yandex Subdomains**         | Performs subdomain search using Yandex search engine.             |
| **Bing Subdomains**           | Utilizes Bing search for subdomain discovery.                     |
| **Other Subdomain Tools**     | Supports various subdomain enumeration services.                  |
| **Find Endpoints**            | Uses the Wayback Machine to retrieve archived endpoints.          |
-----------------------------------------------------------------------------------------------------
```

## Installation

1. Clone or download the repository.
2. Load the extension into your browser:
   - Open your browser's extensions page (e.g., `chrome://extensions` in Chrome).
   - Enable "Developer Mode."
   - Click "Load Unpacked" and select the extension folder.

## Usage

1. Open the extension popup.
2. Enter the target domain (e.g., `example.com`) in the input field.
3. Click on any button to open the respective service in a new tab.
