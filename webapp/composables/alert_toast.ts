import Swal      from 'sweetalert2';
// import JSConfetti from 'js-confetti';
import { Notyf } from 'notyf';
import { notify } from "@kyvg/vue3-notification";

// const jsConfetti = new JSConfetti();

// jsConfetti.addConfetti({
//     emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
// });

const notyf = new Notyf({
    // https://github.com/caroso1222/notyf
    duration: 5000,
    position: {
        x: 'right',
        y: 'bottom',
    },
    types: [
        {
            type: 'info',
            className: 'bg-sky-800',
            icon: false,
        },
        {
            type: 'warning',
            background: 'orange',
            icon: {
                className: 'material-icons',
                tagName: 'i',
                text: 'warning',
            },
        },
        {
            type: 'error',
            background: 'indianred',
            duration: 10000,
            dismissible: true,
        },
    ],
});

const fireAlert = async (options: any) => {
    await Swal.fire({
        title: 'Yay!',
        text: options.message,
        icon: options.icon,
        confirmButtonText: 'Cool',
    });
};

export default function useNotifyToast() {
    return {
        // toastSuccess: (message: string) => notyf.success(message),
        // toastInfo: (message: string) => notyf.open({ type: 'info', message }),
        // toastWarning: (message: string) => notyf.open({ type: 'warning', message }),
        // toastError: (message: string) => {
        //     const errorMessage = message?.toString().split(" ").slice(0, 10).join(" ");
        //     notyf.error(`${errorMessage}...`)
        // },
        toastSuccess: (message: string) => notify({text: message, type: 'success'}),
        toastInfo: (message: string) => notify({text: message, type: 'info'}),
        toastWarning: (message: string) => notify({text: message, type: 'warn'}),
        toastError: (message: string) => {
            const errorMessage = message?.toString().split(" ").slice(0, 10).join(" ");
            notify({text: `${errorMessage}...`, type: 'error'});
        },
        swalSuccess: (message: string) => fireAlert({ icon: 'success', message }),
        swalInfo: (message: string) => fireAlert({ icon: 'info', message }),
        swalWarning: (message: string) => fireAlert({ icon: 'warning', message }),
        swalError: async (message: string) => await fireAlert({ icon: 'error', message }),
    };
}
