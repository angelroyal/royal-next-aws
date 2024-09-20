import axios from "axios";

let API_ENDPOINT = `${process.env.NEXT_PUBLIC_ROYAL_URL}confirmation/start`;

export default function ConfirmationEmail(props) {
  const { requestBody } = props;

  const axiosEmail = async () => {
    try {
      const response = await axios.post(API_ENDPOINT, requestBody);
    } catch (error) {
      console.error(error);
    }
  };

  axiosEmail();

  return null;
}
