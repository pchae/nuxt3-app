<template>
    <div class="">

        <Head>
            <Title>Phil Choi - C51</Title>
            <Meta name="description" content="About Phil Choi, Product Designer based in Toronto" />
        </Head>
        <Nav />

        <section id="intro" class="container mt-6 py-6 px-4">
            <div class="content is-medium">
                <h1 class="title has-text-white">Checkout 51</h1>
                <p class="subtitle has-text-grey-light">Product realignment through iterative enhancements & Inclusive Design process</p>
            </div>
        </section>

        <section id="overview" class="container mt-6 py-6 px-4">
            <div class="content">
                <h1 class="title has-text-white">Overview</h1>
            </div>
            <div class="content">
                <p class="is-size-5 has-text-weight-normal has-text-grey-light">Engage is a multi-channel social media
                    engagement tool used by news media, sports teams and brands to promote live dynamic content and
                    drive audience participation.</p>
            </div>
            <div class="content">
                <p class="is-size-5 has-text-weight-normal has-text-grey-light">Upon joining as Design Lead, I made it a
                    priority to establish a close relationship with Customer Support Managers and their clients. By
                    taking the time to address outstanding issues and expected timelines, we were able to create a
                    buffer that allowed us to meet the business demands of simultaneously overhauling the user
                    experiences of multiple SaaS products while continuing to add value to their legacy versions.</p>
            </div>
            <div class="content">
                <picture>
                    <source type="image/webp" srcset="~/assets/project/engage/engage.webp">
                    <source type="image/png" srcset="~/assets/project/engage/engage.png">
                    <img src="~/assets/project/engage/engage.webp" alt="Native app design examples." draggable="false"
                        width="1920" height="1080">
                </picture>
            </div>
            <div class="content">
                <video width="960" height="720" autoplay muted loop controls>
                    <source src="~/assets/project/engage/tcode.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>

        <section id="challenges" class="container py-6 px-4">
            <div class="content">
                <h1 class="title has-text-white">Challenges</h1>
            </div>
            <div class="content">
                <p class="is-size-5 has-text-weight-normal has-text-grey-light">Over the years, the web app went through
                    several redesigns that had not been fully implemented and the source code to the native mobile apps
                    had been lost. The Engineering team recommended building a Progressive Web App (PWA) to replace the
                    mobile apps, leverage the team's expertise, and have a shared codebase for both mobile platforms.
                    This would also allow us to refactor the web application at the feature level without negatively
                    impacting the experience for clients.</p>
            </div>
            <div class="">
                <picture>
                    <source type="image/webp" srcset="~/assets/project/engage/m_redesign.webp">
                    <source type="image/png" srcset="~/assets/project/engage/m_redesign.png">
                    <img src="~/assets/project/engage/m_redesign.webp" alt="Native app design examples."
                        draggable="false" width="1600" height="1013" loading="lazy">
                </picture>
            </div>
        </section>

        <section id="analytics" class="container py-6 px-4">
            <div class="content">
                <h1 class="title has-text-white">Analytics & Measurement</h1>
            </div>
            <div class="content">
                <p class="is-size-5 has-text-weight-normal has-text-grey-light">I worked with Product owners to
                    introduce and configure Pendo.ai as our primary measurement tool across the organization. This
                    allowed us to accurately validate high traffic features, identify pain points, and isolate unused
                    features to sunset. Meanwhile, initiatives like client outreach with CSMs allowed us to uncover new
                    issues which led to a reprioritization of the roadmap.</p>
            </div>
            <div class="">
                <picture>
                    <source type="image/webp" srcset="~/assets/project/engage/pendo.webp">
                    <source type="image/png" srcset="~/assets/project/engage/pendo.jpg">
                    <img src="~/assets/project/engage/pendo.webp" alt="Pendo.ai analytics tool screenshot."
                        draggable="false" width="1600" height="960" loading="lazy">
                </picture>
            </div>
        </section>


        <ProjectList />

        <Footer />

    </div>
</template>


<script>
</script>


<style lang="scss" scoped>

</style>