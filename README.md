# Cookie Lens

Cookie Lens is a privacy-first Chrome extension that translates technical cookie names into plain English.

## Highlights

- Local-only analysis: no external API calls
- Plain-English purpose mapping via built-in dictionary
- Category model:
  - Strictly Necessary
  - Functional
  - Analytics
  - Tracking/Marketing
- Privacy Health Score summary
- Search and category filter
- Human-friendly expiry wording
- Confidence indicator for each cookie:
  - High (Dictionary match)
  - Medium (Heuristic match)
  - Low (Unknown cookie)

## Load in Chrome

1. Open `chrome://extensions`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select: `cookie-lens/src`

## Permissions

- `cookies`: read cookies for current site context
- `activeTab`, `tabs`: determine active tab URL for scoped analysis

## Privacy

Cookie Lens does not send cookie data to external services. Classification is performed locally in the extension popup.

## License

Apache License 2.0
