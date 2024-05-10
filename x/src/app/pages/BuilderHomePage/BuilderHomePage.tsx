import React, { useEffect, useState } from 'react';
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';

builder.init('d674b368359c422d9efd13dbb0803687');


export default function CatchAllRoute() {
  const isPreviewingInBuilder = useIsPreviewing();
  // Use `any` to handle dynamic content structure
  const [notFound, setNotFound] = useState<boolean>(false);
  const [content, setContent] = useState<any | null>(null);

  useEffect(() => {
    async function fetchContent() {
      const content = await builder.get('page', {
        url: window.location.pathname
      }).promise();
      
      // Dynamically renders tab title if the content has a title
      if (content && content.data && content.data.title) {
        document.title = content.data.title;
      }

      setContent(content);
      setNotFound(!content);
    }
    fetchContent();
  }, []);

  if (notFound && !isPreviewingInBuilder) {
    return <div>Not Found 404 Error</div>;
  }

  return (
    <>
      {content && <BuilderComponent model="page" content={content} />}
    </>
  );
}
