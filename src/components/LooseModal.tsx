import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

type LooseModalProps = {
  isOpen: boolean;
  word: string;
  handleBackToHome: () => void;
  handleRestart: () => void;
};

export default function LooseModal({
  isOpen,
  word,
  handleBackToHome,
  handleRestart,
}: LooseModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-3xl text-red-500 text-center font-montserrat font-black leading-6 tracking-wider "
                >
                  PERDU
                </Dialog.Title>
                <div className="mt-8">
                  <p className="text-xl text-gray-500 text-center font-montserrat">
                    Le mot à trouver était{" "}
                    <span className="font-black text-indigo-600">{word}</span>
                  </p>
                </div>

                <div className="mt-8 flex justify-center gap-4">
                  <button
                    type="button"
                    className="tracking-wider flex-1 rounded-full bg-indigo-600 px-4 py-2.5 text-base font-montserrat font-black text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={handleRestart}
                  >
                    REJOUER
                  </button>
                  <button
                    type="button"
                    className="tracking-wider flex-1 rounded-full bg-white px-5 py-3 text-base font-montserrat font-black text-indigo-600 shadow-sm ring-1 ring-inset ring-indigo-600 hover:bg-gray-50"
                    onClick={handleBackToHome}
                  >
                    ACCUEIL
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
