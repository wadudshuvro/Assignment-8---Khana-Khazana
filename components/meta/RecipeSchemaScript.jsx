export default function RecipeSchemaScript({ recipe, recipePathName }) {
    // Database a Image property te ek e dhoroner image bebohar ar karone, ekhane sudu thumbnail image use kora hoyeche.
    // Screenshort: https://prnt.sc/XhXMHDw9KdBE

    const formattedData = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        image: [recipe.thumbnail],
        name: recipe.name,

        address: {
            "@type": "PostalAddress",
            streetAddress: "148 W 51st St",
            addressLocality: "New York",
            addressRegion: "NY",
            postalCode: "10019",
            addressCountry: "US",
        },
        review: {
            "@type": "Review",
            reviewRating: {
                "@type": "Rating",
                ratingValue: recipe.rating,
                bestRating: "5",
            },
            author: {
                "@type": "Person",
                name: recipe.author,
            },
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 40.761293,
            longitude: -73.982294,
        },
        url: recipePathName,
        telephone: "+12122459600",
        servesCuisine: "American",
        priceRange: "$$$",
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday"],
                opens: "11:30",
                closes: "22:00",
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Wednesday", "Thursday", "Friday"],
                opens: "11:30",
                closes: "23:00",
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "16:00",
                closes: "23:00",
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Sunday",
                opens: "16:00",
                closes: "22:00",
            },
        ],
    };
    return (
        <>
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(formattedData),
                }}
            />
        </>
    );
}
