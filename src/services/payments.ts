import api from "./api";

export const createPayment = async () => {
  const idempotencyKey = crypto.randomUUID();

  const response = await api.post(
    "/api/payments",
    {},
    {
      headers: {
        "Idempotency-Key": idempotencyKey,
      },
    },
  );

  return response.data;
};

export const verifyPayment = async (reference: string) => {
  const response = await api.get(`/api/payments/verify/${reference}`);

  return response.data;
};

export const getMyPayments = async () => {
  const response = await api.get("/api/payments/my-payments");

  return response.data;
};
