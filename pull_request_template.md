-   [CIBDP-XXX](https://jira.alm.europe.cloudcenter.corp/browse/CIBDP-XXX): Small description if necessary in addition to the Jira ticket URL. This is mandatory in case there is no Jira ticket associated.

## ⚙️ How does it work

A few words on what solution you chose (if it's the case) and describe the mechanism (if needed)

## 🧪 How to test

Describe the steps to be taken to test this feature. This includes configs to be made in local, the url of the app, credentials (if needed)

## 📷 Visual preview

Add screenshots in case of simple visual changes (button color, text color, z-index etc) to give the reviewer an idea about what is expected, a before and after etc. Add screenshots for a mobile view if appropriate.

# Front-end checklist:

-   [ ] Components should not overpass 200 lines for maintenance and testing purposes.
-   [ ] No inline `styles` for html elements. No style="text-align: center".
-   [ ] No `axios`(libraries which make http calls) calls directly on the components. Store or service/helper depending on the need. Use `http.ts` instead of using `axios` directly.
-   [ ] Code used in more than 2 files should be moved to a utility/helper and be shared.
-   [ ] Tested on mobile.
-   [ ] Tested in Chrome, Firefox, Safari.
