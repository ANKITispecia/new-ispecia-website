'use server';
'use strict';

export async function POST(request) {
  try {
    const { postId, authorName, authorEmail, content } = await request.json();

    // Validate incoming data
    if (!postId || !authorName || !authorEmail || !content) {
      throw new Error('Missing required fields');
    }

    const response = await fetch('https://www.ispecia.com/wp-json/wp/v2/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        post: postId,
        author_name: authorName,
        author_email: authorEmail,
        content: content,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to submit comment: ${errorData.message || 'Unknown error'}`);
    }

    const data = await response.json();
    return { success: true, data };

  } catch (error) {
    return { error: error.message || 'Internal server error' };
  }
}
