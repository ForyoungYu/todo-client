import { signIn, signOut } from "@/auth";

export default function SignIn() {
  return (
    <div className="flex flex-col gap-4">
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <button
          type="submit"
          className="p-2 border-2 border-gray-800 rounded-xl bg-gray-300 cursor-pointer hover:bg-gray-400"
        >
          Signin with GitHub
        </button>
      </form>

      {/* <form
        action={async (formData) => {
          "use server";
          console.log(formData);
          await signIn("resend", formData);
        }}
      >
        <input type="text" name="email" placeholder="Email" />
        <button type="submit">Signin with Resend</button>
      </form> */}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Sign out</button>
      </form>
    </div>
  );
}
