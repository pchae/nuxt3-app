<template>
    <div class="">

        <Head>
            <Title>Phil Choi - About</Title>
            <Meta name="description" content="About Phil Choi, Product Designer based in Toronto" />
        </Head>

        <Nav />

        <section id="bio" class="container is-widescreen py-6 px-4">
            <div class="content is-medium">
                <h1 class="title has-text-white">My focus is on art, design, and technology as well as when, where, and
                    how they affect everyday life.</h1>
            </div>
            <div class="content">
                <p class="is-size-5 has-text-weight-normal has-text-grey-light">As an 80s baby, I hold a unique
                    perspective due to maturing in parallel with the shift from analog to digital technologies. The
                    result is that I'm able to bridge the cultural, ideological, and technological gaps between older
                    generations and today's youth.</p>
            </div>
            <div class="content">
                <p class="is-size-5 has-text-weight-normal has-text-grey-light">Over the past decade I've designed and
                    built solutions for North American digital agencies, brands, startups, FinTech, and Software as a
                    Service platforms. My Design process incorporates <a
                        href="https://www.ted.com/talks/david_kelley_human_centered_design" rel="noreferrer"
                        target="_blank">Human-centered design principles</a>, the <a href="https://agilemanifesto.org/"
                        rel="noreferrer" target="_blank">Agile Manifesto</a>, Diversity & Inclusion for all, scalable
                    Design systems, <a href="https://www.goodreads.com/en/book/show/29939161-radical-candor"
                        rel="noreferrer" target="_blank">Radical Candor</a>, and <a
                        href="https://www.forbes.com/sites/victorlipman/2014/10/15/phil-jackson-brings-ny-knicks-mindful-management/"
                        rel="noreferrer" target="_blank">Mindful Management</a> practices. As a person with an
                    'Invisible disability' of partial vision loss, I strongly advocate UX for the differently-abled and
                    <a href="https://www.w3.org/WAI/business-case/" rel="noreferrer" target="_blank">Accessibility for
                        All</a>.</p>
            </div>
            <div class="content">
                <p class="is-size-5 has-text-weight-normal has-text-grey-light">Platforms I've designed for include:
                    Android, iOS, Roku, Amazon Fire TV, Smart TVs, Playstation 4, Windows Devices, and enterprise SaaS.
                </p>
            </div>
        </section>

        <Client />

        <Contact />

        <Footer />

    </div>
</template>


<script lang="ts">
</script>


<style lang="scss" scoped>
@import '~/assets/styles/_variables.scss';

.button.is-link.is-outlined {
    color: $blue;
    background: none;
    border-color: $blue;

    &:hover {
        color: $red;
        background: none;
        border-color: $red;
    }
}
</style>