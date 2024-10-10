export default function BoldTextTest({ jsonData }) {

  const textToBold = (textArray) => {
    return textArray.map((item) => {
      return item.replace(/<b>(.*?)<\/b>/g, '<span style="color: black; font-size: 0.875rem;">$1</span>');
    });
  };

  const boldingText = textToBold(jsonData.text);

  return (
    <>
      {boldingText.map((item, index) => (
        <div key={index} dangerouslySetInnerHTML={{ __html: item }} />
      ))}
    </>
  );
};