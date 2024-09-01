import { useState, useEffect } from 'react';

export default function useGetTeamsFlags(teams) {
  const [flagUrls, setFlagUrls] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const preloadImages = (urls) => {
      return Promise.allSettled(
        urls.map((url) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = resolve;
            img.onerror = reject;
          });
        })
      );
    };

    const loadFlags = async () => {
      try {
        const teamNames = teams.map(team => team.name);
        const urls = teams.map(team => `https://flagcdn.com/${team.code}.svg`);
        const results = await preloadImages(urls);

        const flags = results.reduce((acc, result, index) => {
          if (result.status === 'fulfilled') {
            acc[teamNames[index]] = urls[index];
          } else {
            console.error(`Failed to load flag for ${teamNames[index]}`);
          }
          return acc;
        }, {});

        setFlagUrls(flags);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    if (teams.length > 0) {
      loadFlags();
    }
  }, [teams]);

  return { flagUrls, loading, error };
}
