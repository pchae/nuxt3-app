<template>
    <div class="">
        <Head>
            <Title>Phil Choi - Project page</Title>
            <Meta name="description" content="About Phil Choi, Product Designer based in Toronto"/>
        </Head>
        <Nav />

        <section id="intro" class="container is-widescreen py-6 px-4">
            <div class="content is-medium">
                <h1 class="title has-text-white">Engage: Content Studio</h1>
                <h3 class="subtitle has-text-weight-normal has-text-grey-light">Modernizing social content for Enterprise SaaS</h3>
            </div>
        </section>

        <section id="overview" class="container py-6 px-4">
            <div class="content">
                <h1 class="title has-text-white">Overview</h1>
            </div>
            <div class="content">
                <p class="is-size-5 has-text-weight-normal has-text-grey-light">Engage is a multi-channel social media engagement tool used by news media, sports teams and brands to promote live dynamic content and drive audience participation.</p>
            </div>
            <div class="content">
                <p class="is-size-5 has-text-weight-normal has-text-grey-light">Upon joining as Design Lead, I made it a priority to establish a close relationship with Customer Support Managers and their clients. By taking the time to address outstanding issues and expected timelines, we were able to create a buffer that allowed us to meet the business demands of simultaneously overhauling the user experiences of multiple SaaS products while continuing to add value to their legacy versions.</p>
            </div>
        </section>

        <section id="challenges" class="container py-6 px-4">
            <div class="content">
                <h1 class="title has-text-white">Challenges</h1>
            </div>
            <div class="content">
                <p class="is-size-5 has-text-weight-normal has-text-grey-light">Over the years, the web app went through several redesigns that had not been fully implemented and the source code to the native mobile apps had been lost. The Engineering team recommended building a Progressive Web App (PWA) to replace the mobile apps, leverage the team's expertise, and have a shared codebase for both mobile platforms. This would also allow us to refactor the web application at the feature level without negatively impacting the experience for clients.</p>
            </div>
        </section>

        <section id="analytics" class="container py-6 px-4">
            <div class="content">
                <h1 class="title has-text-white">Analytics & Measurement</h1>
            </div>
            <div class="content">
                <p class="is-size-5 has-text-weight-normal has-text-grey-light">I worked with Product owners to introduce and configure Pendo.ai as our primary measurement tool across the organization. This allowed us to accurately validate high traffic features, identify pain points, and isolate unused features to sunset. Meanwhile, initiatives like client outreach with CSMs allowed us to uncover new issues which led to a reprioritization of the roadmap.</p>
            </div>
        </section>

        <section id="wireframes" class="container py-6 px-4">
            <div class="content">
                <h1 class="title has-text-white">Mobile-first wireframes</h1>
            </div>
            <div class="content">
                <p class="is-size-5 has-text-weight-normal has-text-grey-light">The goal of the PWA was to reimagine Engage's Content Studio feature set in a new Mobile-first experience. Not only would this allow users to curate and moderate live Social Media events, but clients in the Journalism space would finally be able to create, edit, and post written and rich-media content live and in real-time from the source.</p>
            </div>
        </section>

        <section id="pwa" class="container py-6 px-4">
            <div class="content">
                <h1 class="title has-text-white">Progressive Web App</h1>
            </div>
            <div class="content">
                <p class="is-size-5 has-text-weight-normal has-text-grey-light">The experience was built with React-Native and StoryBook to create a 1:1 mirror of my Design System. These components were engineered from the ground-up to be the foundational building blocks that would revamp the entire Engage product as well as Scribblelive's SaaS suite ambitions.</p>
            </div>
        </section>

        <section id="prototype" class="container py-6 px-4">
            <div class="content">
                <h1 class="title has-text-white">Prototyping & Usability Tests</h1>
            </div>
            <div class="content">
                <p class="is-size-5 has-text-weight-normal has-text-grey-light">To validate each user story, I created a series of user flows and interactive prototypes to document and test conditional logic, complex micro-interactions, and dynamic workflows. Validation was done in-house with clients and via remote tools like usertesting.com.</p>
            </div>
        </section>

        <section id="clients" class="container py-6 px-4">
            <div class="content">
                <h1 class="title has-text-white">Client Feature Requests</h1>
            </div>
            <div class="content">
                <p class="is-size-5 has-text-weight-normal has-text-grey-light">The sales-focused nature of the company created a continuous stream of unique feature requests from clients like DELL EMC and Redbull. One of Dell's requests (shown below) was to create a new modular and embeddable experience linking live streams with Engage's social media integrations.</p>
            </div>
        </section>

        <section id="clients" class="container py-6 px-4">
            <div class="content">
                <h1 class="title has-text-white">Social Media Components</h1>
            </div>
            <div class="social">
                <p class="is-size-5 has-text-weight-normal has-text-grey-light">One of Engage's core features is the ability to add, curate, and moderate multiple social media sources into a single feed known as a 'vertical'. The app achieved this by recreating the layouts and populating the content with cached copies of the original social media posts from platforms like Twitter, Instagram, Youtube, and Facebook. All of the modules needed to be upyated and redesigned to add responsiveness, pass WCAG 2.1 accessibility guidelines, and match the latest UIs of the social media platforms. Custom modules for video and editorial content were also designed and developed to fulfill requests from the company's media clients.</p>
            </div>
        </section>
        <Footer />        
    </div>
</template>


<script lang="ts">
</script>


<style lang="scss" scoped>

</style>