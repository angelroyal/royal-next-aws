// pages/api/sendToSlack.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { title, errorType, errorDetails } = req.body;

  if (!title || !errorType || !errorDetails) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const message = {
    text: `${title}: ${errorType}`,
    attachments: [
      {
        text: JSON.stringify(errorDetails, null, 2),
        color: 'danger',
      },
    ],
  };

  try {
    await axios.post('https://hooks.slack.com/services/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', message);
    res.status(200).json({ message: 'Message sent to Slack' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send message to Slack', error });
  }
}
