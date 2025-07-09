# Sitemap Setup for Roy Liu Portfolio

This project includes a comprehensive sitemap setup for optimal SEO performance.

## Files Created

### 1. `app/sitemap.ts`
- **Purpose**: Next.js 13+ App Router dynamic sitemap generation
- **URL**: Automatically serves at `/sitemap.xml`
- **Features**: 
  - Dynamic URL generation based on environment
  - Includes all main sections of the portfolio
  - Proper priority and change frequency settings

### 2. `app/robots.ts`
- **Purpose**: Next.js 13+ robots.txt generation
- **URL**: Automatically serves at `/robots.txt`
- **Features**:
  - Allows all crawlers to access the site
  - References the sitemap location
  - Customizable crawl rules

### 3. `public/sitemap.xml`
- **Purpose**: Static backup sitemap
- **URL**: Accessible at `/sitemap.xml` (if dynamic sitemap fails)
- **Features**:
  - Static XML format
  - Manual maintenance required for updates

### 4. Enhanced `app/layout.tsx`
- **Purpose**: Improved SEO metadata
- **Features**:
  - Open Graph tags for social sharing
  - Twitter Card metadata
  - Canonical URL specification
  - Enhanced descriptions and keywords

## How to Customize

### 1. Update Your Domain
Replace `https://your-domain.com` in the following files:
- `app/sitemap.ts`
- `app/robots.ts`
- `app/layout.tsx`
- `public/sitemap.xml`

### 2. Add New Pages/Sections
If you add new pages or sections:
- Add entries to `app/sitemap.ts`
- Update `public/sitemap.xml` manually
- Consider updating the metadata in `app/layout.tsx`

### 3. Adjust Priorities
URL priorities in the sitemap:
- `1.0` - Homepage (highest priority)
- `0.9` - Contact page (high priority for conversions)
- `0.8` - Other sections (normal priority)

### 4. Change Frequency
Current settings:
- `monthly` - For portfolio sites that update occasionally
- Consider `weekly` for more frequently updated content

## Testing

1. **Development**: Visit `http://localhost:3000/sitemap.xml` to test
2. **Production**: Visit `https://your-domain.com/sitemap.xml`
3. **Validation**: Use Google Search Console to validate sitemap
4. **Robots.txt**: Check `https://your-domain.com/robots.txt`

## Deployment Notes

- Next.js will automatically generate the sitemap and robots.txt
- The static sitemap serves as a backup
- Make sure to update domain URLs before deploying to production
- Consider adding sitemap submission to your deployment pipeline

## SEO Benefits

- Improved search engine crawling
- Better indexing of all portfolio sections
- Enhanced social media sharing with Open Graph tags
- Proper canonical URL specification
- Mobile-friendly metadata

## Maintenance

- Update `lastmod` dates when content changes
- Review and update keywords quarterly
- Monitor sitemap performance in Google Search Console
- Update Open Graph images as needed 