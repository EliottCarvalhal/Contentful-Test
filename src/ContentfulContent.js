import React, { useEffect, useState } from 'react';
import * as contentful from 'contentful';

const client = contentful.createClient({
  space: 'g7k9841z4xzi',
  environment: 'master',
  accessToken: 'MtR3mIfozFTVdoE21hG20kKcjscTtdUXxzBvvX-wCxU',
});

const ContentfulContent = () => {
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.getEntry('6Y7oPBuhTxIhNG71K0oFui');
        setEntry(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {entry && (
        <div>
          <h1>{entry.fields.people}</h1>
        </div>
      )}
    </div>
  );
};

export default ContentfulContent;
