import { Notyf } from "notyf";
import "notyf/notyf.min.css";

export class Notification {
  private readonly notif?: Notyf;

  constructor(duration = 3000) {
    if (typeof window === "undefined") {
      return;
    }

    this.notif = new Notyf({
      duration,
      position: {
        x: "right",
        y: "top",
      },
    });
  }

  error(message = "Error"): void {
    this.notif?.error({
      message,
      dismissible: true,
    });
  }

  success(message = "Success"): void {
    this.notif?.success({
      message,
      dismissible: true,
    });
  }
}

export function validateEmail(email: string): boolean {
  const tester =
    /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

  if (!email) {
    return false;
  }

  const emailParts = email.split("@");

  if (emailParts.length !== 2) {
    return false;
  }

  const account = emailParts[0];
  const address = emailParts[1];

  if (account.length > 64 || address.length > 255) {
    return false;
  }

  const domainParts = address.split(".");
  if (domainParts.some((part) => part.length > 63)) {
    return false;
  }

  return tester.test(email);
}
