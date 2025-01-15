The solution involves explicitly telling PurgeCSS about the dynamic classes.  This can be achieved in several ways:

1. **Using the `@apply` directive (preferred):** Instead of directly applying dynamic classes, use the `@apply` directive with a utility class that encompasses all possible combinations. This allows Tailwind to pre-compute the styles, and PurgeCSS will be able to remove unused classes as intended. 

2. **Custom PurgeCSS Configuration:** Modify the PurgeCSS configuration within your `tailwind.config.js` file to include patterns or functions that specifically identify the dynamically generated classes.  This provides greater flexibility but requires more manual configuration.