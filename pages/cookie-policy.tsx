import Layout from '@components/Layout';

const CookiePolicy = () => (
    <Layout>
        <div className="root mx-auto">
            <h1>Cookie Policy</h1>
            <p>Cookies are small pieces of text used to store information on web browsers. Cookies are used to store and receive identifiers and other information on computers, phones and other devices. Other technologies, including data we store on the web browser or device, identifiers associated with your device, and other software, are used for similar purposes. In this policy, we refer to all of these technologies as "cookies".</p><br />
            <p>We use cookies to provide you with our open source websites and any content, related documentation, information and services (e.g. apps, tutorials, access to resources, etc.) made available to you on this website, or any other website that links to this Cookie Policy (collectively, the"Website"). This policy explains how we use cookies and the choices you have. Except as otherwise stated in this policy, the Data Policy will apply to our processing of the data we collect via cookies.</p><br />
            <p>For clarity, this Cookies Policy only applies to this Website and does not apply to any:</p><br />
            <p>1. use of open source code, documentation or specifications made available on GitHub, which are governed by the terms of the applicable open source license;</p><br />
            <p>2. pull requests, issues and any other interactions or features related to participation in in open source projects on GitHub, which are governed by GitHub’s terms and conditions; or</p><br />
            <p>3. use of any other JustSuperb website, service or product, which are governed by the terms and conditions applicable to those offerings.</p>

            <h2>Why Do We Use Cookies?</h2>
            <p>Cookies help us provide, protect and improve our Website, such as personalizing content, and providing a safer experience. While the cookies that we use may change from time to time as we improve and update our Website, we use them for the following purposes:</p>

            <h2>Security</h2>
            <p>We use cookies to help us keep the Website safe and secure. For example, cookies are used to help us identify and impose additional security measures against particular types of software attacks against websites.</p>

            <h2>Performance</h2>
            <p>We use cookies to provide you with the best experience possible. For example, cookies help us route traffic between servers and understand how quickly the Website loads for different people. Cookies also help us record the ratio and dimensions of your screen and windows and know whether you've enabled high-contrast mode, so that we can render sites and apps correctly.</p>

            <h2>Functional cookies</h2>
            <p>We use cookies to enhance the functionality of our Website, for example to allow integration with third party services, such as GitHub. GitHub is a third party platform where users can host and review code, manage projects, and build software alongside alongside other developers. We use these cookies to make your online experiences richer and more personalized. We think that these cookies will improve your experience when using the Website but are non-essential to their use.</p>

            <h2>Analytics</h2>
            <p>We use cookies served by Google Analytics to collect limited data directly from end-user browsers to enable us to better understand your use of the Website, including making use of the demographics and interests reports services provided by Google Analytics. Further information on how Google collects and uses this data is available on Google's website at: https://www.google.com/policies/privacy/partners/. You can opt-out of all Google supported analytics within the Services by visiting https://tools.google.com/dlpage/gaoptout.</p>


            <h2>How Can You Control Our Website's Use of Cookies?</h2>
            <p>You may be able to refuse or disable cookies by adjusting your web browser settings or visiting https://www.youronlinechoices.eu. Because each web browser is different, please consult the instructions provided by your web browser (typically in the "help" section). If you choose to refuse, disable, or delete these technologies, some of the functionality of the Website may no available to you.</p>


            <h2>How Often Will We Update This Cookie Policy?</h2>
            <p>We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies and related technologies we use or for other operational, legal or regulatory reasons.</p><br />
            <p>Each time you use our Website, the current version of the Cookie Policy will apply. When you use our Website, you should check the date of this Cookie Policy (which appears at the top of this document) and review any changes since the last version.</p>


            <h2>Where Can You Obtain Further Information?</h2>
            <p>To contact us with your questions or comments regarding this Cookie Policy or the information collection and dissemination practices of the Website, you can email us at justsuperbname@gmail.com.</p>
        </div>
        <style jsx>{`
            .root {
                max-width: 800px;
                line-height: 1.4;
                font-size: 1rem;
                padding: 0 20px 200px 20px;
            }
            h1 {
                padding: 200px 0 30px 0;
                text-align: center;
                font-size: 40px;
            }
            h2 {
                font-size: 24px;
                margin: 30px 0 10px 0;
            }
        `}</style>
    </Layout>
);

export default CookiePolicy;