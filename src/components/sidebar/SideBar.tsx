import {
  component$,
  useSignal,
  Resource,
  useResource$,
} from "@builder.io/qwik";

const breedsResource = useResource$(async ({ track, cleanup }) => {
  const res = await fetch(`https://dog.ceo/api/breeds/list/all  `);
  const json = await res.json();
  return Array.isArray(json.message)
    ? json.message.map((url: string) => url)
    : Promise.reject(json);
});

export const SideBar = component$(() => {
  return (
    <div class="flex flex-col max-w-xl	 mx-auto ">
      <div class="flex flex-col my-2">
        <h2>List Of Breeds</h2>
        <strong>TO DO</strong>
      </div>
    </div>
  );
});
