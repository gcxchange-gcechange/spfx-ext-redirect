# Redirect Dialog Extension

## Summary

The Redirecting Dialog Extension is a SharePoint Framework (SPFx) extension that notifies users when a feature has been moved to a new site. The dialog is fully bilingual (English and French) and provides two action buttons:

- Explore Home Page – Redirects users to the site’s main home page.

- Go to New Feature – Takes users directly to the new site where the feature now resides.

This extension ensures users are clearly informed about the feature relocation while offering quick navigation options in both supported languages.

## Prerequisites

## 1. In the onInit function modify the URL’s query parameter (?search=) with the term or keyword you want to search for.

```ts

    const myParam = params.get('redirect'); // 🔁 Replace with URL’s query parameter
```

## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.21.1-green.svg)

## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)


## Version history

| Version | Date               | Comments        |
| ------- | ------------------ | --------------- |
| 1.0     | October 20 , 2025  |Initial Release  |

## Minimal Path to Awesome

- Clone this repository
- Ensure that you are at the solution folder
- in the command-line run:
  - **npm install**
  - **gulp serve**


## Disclaimer

**THIS CODE IS PROVIDED _AS IS_ WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---


