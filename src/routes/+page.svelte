<script>
// @ts-nocheck

    import { browser } from '$app/environment';
    import { onMount } from "svelte";

    onMount(async function () {
        if (browser) {
            // Set the date we're counting down to
            var countDownDate = new Date("Jun 29, 2023 00:00:00").getTime();

            // Update the count down every 1 second
            var x = setInterval(function() {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="demo"
            document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "Parabéns, Rocha Negra nº 1!";
            }
            }, 1000);
        }
    })
</script>

<svelte:head>
    <title>Rocha Negra Nº 1 - 150 anos</title>
    <link rel="preload" href="/fonts/agency-fb-bold.woff2" as="font" type="font/woff2" crossorigin>
</svelte:head>

<main class="container flex flex-col lg:flex-row h-max justify-center items-center mx-auto px-8 gap-5 lg:gap-0 py-5">
    <img src="/logo-150anos.webp" alt="" class="w-full xs:w-[80%] sm:w-[60%] max-w-[17rem] lg:max-w-max lg:w-[40%]">
    <div class="flex flex-col items-center gap-10">
        <div class="flex flex-col items-center gap-5 text-center">
            <h1 class="font-agencyfb text-[#CB9727] text-3xl">Contagem regressiva para o sesquicentenário:</h1>
            <p id="countdown" class="font-arial text-black/50 text-4xl w-max"></p>
        </div>
        <form action="https://formsubmit.co/ronymarcon@gmail.com" method="POST" class="flex flex-col lg:flex-row gap-5 lg:gap-2">
            <div class="flex flex-col gap-2 w-max">
                <input type="text" name="nome" id="" placeholder="Nome" class="p-[0.8rem] px-6 rounded-lg">
                <input type="tel" name="telefone" id="" placeholder="Telefone" class="p-[0.8rem] px-6 rounded-lg">
            </div>
            <input type="submit" class="p-[1rem] px-8 rounded-lg bg-[#CB9727] text-white cursor-pointer">
            <input type="hidden" name="_template" value="table">
        </form>
    </div>
</main>