interface IAuthenticateRequestDTO {
  email: string;
  password: string;
}

interface IAuthenticateResponseDTO {
  user: {
    email: string;
  };
  token: string;
}

export { IAuthenticateRequestDTO, IAuthenticateResponseDTO };
