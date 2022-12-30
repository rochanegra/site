<svelte:head>
    <title>Rocha Negra Nº 1 - 150 anos</title>
</svelte:head>

<main class="h-screen w-screen bg-[#77C1FF]/10">
    <div class="container flex flex-col lg:flex-row h-screen justify-center items-center m-auto px-8 gap-5 lg:gap-0">
        <img src="/logo-150anos.webp" alt="" class="w-full xs:w-[80%] sm:w-[60%] min-w-[20rem] max-w-[22rem] lg:max-w-max lg:w-[40%]">
        <div class="flex flex-col items-center gap-10">
            <h1 class="font-agencyfb text-[#CB9727] text-3xl uppercase">Em breve</h1>
            <form action="https://formsubmit.co/ronymarcon@gmail.com" method="POST" class="flex flex-col lg:flex-row gap-5 lg:gap-2">
                <div class="flex flex-col gap-2 w-max">
                    <input type="text" name="nome" id="" placeholder="Nome" class="p-[0.8rem] px-6 rounded-lg">
                    <input type="tel" name="telefone" id="" placeholder="Telefone" class="p-[0.8rem] px-6 rounded-lg">
                </div>
                <input type="submit" class="p-[1rem] px-8 rounded-lg bg-[#CB9727] text-white cursor-pointer">
                <input type="hidden" name="_template" value="table">
            </form>
        </div>
    </div>
</main>