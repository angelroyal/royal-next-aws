export const TextBoldFunctionTest = ({ children }) => {
    const text = children.toString();

    return text.replace(/<bt>(.*?)<\/bt>/g, '<span className="font-bold">$1</span>');
};
