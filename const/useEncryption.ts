const useEncrypt = () => {
  const encrypt = (value: string): string => {
    return window.btoa(
      encodeURIComponent(value).replace(/%([0-9A-F]{2})/g, (match, p1) =>
        String.fromCharCode(parseInt(p1, 16))
      )
    );
  };

  const decrypt = (value: string): string => {
    return decodeURIComponent(
      window
        .atob(value)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
  };

  return { encrypt, decrypt };
};

export default useEncrypt;