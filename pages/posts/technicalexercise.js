import Link from 'next/link'

export default function technicalexercise() {
  return (
      <>





      <h1>Technical Exercise!</h1>
        <h2> Question 1:</h2>
            <p><i>Talk about how you made your site and why you chose the tools you did. 
                Briefly explain one challenge you experienced in setting up this site and how you solved it.</i></p>
            <h3>Response:</h3>
            <p>* The initial deployment of my site went very smoothly on Netlify. Granted, I am using one of the most 
                basic templates out there for <b>Next.js</b>. But that doesn't matter. It was fun just to deploy this!</p>
            <p>* I chose a template for <code>Next.js</code>because I have never worked with it before and I wanted to understand how page Linking functioned, in particular. 
            I also wanted to use a template that had very few options so as not to get too distracted with trying to make this website flashy and allow myself some time to become a bit accustomed to <b>Next.js</b>. </p>
            <p>* One challenge I ran into was with the DNS setup for an apex domain. I already had a domain parked and I am not using Netlify DNS for this site. 
                Normally, I would have set the `www` as the subdomain but the <a href="https://docs.netlify.com/domains-https/custom-domains/multiple-domains/#apex-domains-and-www-subdomains">Netlify documentation</a> specifically states when using external DNS, 
                it is <b>strongly recommended</b> to set the `www` subdomain as the primary domain. I likely saved myself from hours of troubleshooting DNS issues by reading the documentation! :gratitude:
            </p>
        
        <h2>Question 2:</h2>
            <p><i>What did you think of our service during the time you used it? Provide either some constructive criticism or some points that impressed you. 
                Be honest! “It sucked” isn’t a wrong answer unless you don’t elaborate and provide some constructive criticism ;)</i></p>
            <h3>Response:</h3>
            <p>* I did try several other templates located <a href="https://jamstack.org/generators/">on the jamstack.org/generators</a> page, however, the few others I tried failed to deploy out-of-the-box.</p>
            <p>* After briefly looking at the Deploy Log, I see a lot of <code>npm WARN old lockfile</code> warnings and several version conflicts. I am guessing a bit here, but it appears that when the deployment container is assigned, it pulls in the latest packages 
            available on spin-up. My theory is that depending on when the template was originally written, the original dependencies may be outdated and causing several version conflicts, which could result in the deployment failing. </p>
            <p>* What impresses me is just being able to view the Deploy Log! It is timestamped. You can copy the entire log to clipboard. There are quick keys
                for the head and tail. There is even a suggestion to enable essential features based on the framework of my deployment. I'm hesitant to suggest anything because overcomplicating this could have diminishing returns on user experience. 
                The only possible suggestion here might be for the Deploy Page. I wonder if it would be helpful to add documentation links as suggestions when/if a build failure is encountered. It would really depend on how that would be implemented to avoid cluttering up the Page, though. 
            </p>


            <h2>Question 3:</h2>
            <p><i>Rank your 5 favorite, and 5 least favorite, activities from this list: <a href="https://gist.github.com/fool/b0f254ff8c72a5765b6a9138249789d6">https://gist.github.com/fool/b0f254ff8c72a5765b6a9138249789d6</a></i></p>
            <h3>Response:</h3>
            <h4>Favorites!</h4>
            <p>1. -Spot trends across many cases to improve Netlify's product and service. </p>
            <p>2. -Help train and onboard new support teammates.</p>
            <p>3. -Debug a customer's build using a programming language and framework that I have never seen before.</p>
            <p>4. -Help manage communications during a service outage.</p>
            <p>5. -Set up my own copy of several static site frameworks for debugging.</p>

            <h4>Least Favorites!</h4>
            <p>-1. -Respond to Netlify customers on Twitter. (Though, I have done this during service outages:) </p>
            <p>-2. -Create video tutorials to help teach users a specific feature or use case.</p>
            <p>-3. -Engage multiple users at once via chat to answer their questions and troubleshoot problems.</p>
            <p>-4. -Work with prospective customers to explain our service and the pricing model. (This is mostly just the pricing model portion that I am not a fan of explaining.)</p>
            <p>-5. -Manage a Support Team </p>

            
            
            <h2>Question 4:</h2>
            <p><i>Provide a link to documentation for a technical/developer-focused product, which you think are well done, and explain why you think they are well done.</i></p>
            <h3>Response:</h3>
            <p>* I've been a fan of how Gremlin organizes and authors their documentation. Here is an example: <a href="https://www.gremlin.com/community/tutorials/chaos-engineering-on-docker-swarm-with-gremlin-and-datadog/">Chaos Engineering on Docker Swarm with Gremlin and Datadog</a></p>
            <p>* The left side navigation is simple and effective with section titles that link to anchors within the document.</p>
            <p>* The code snippets are clear and functional.</p>
            <p>* The use of screenshots are applicable and not overdone.</p>
            <p>* Each of the experiments have clear goals and expectations written out in a conversational, easy to follow format. The author also does
                a great job of listing a few "gotchas" to watch out for, such as letting you know that if a dashboard does not populate on the first load, it may be due to 
                waiting for containers to spin up. I feel that it's little things like this in documentation which helps make a reader feel engaged and from feeling lost. 
            </p>

            
            
            <h2>Question 5:</h2>
            <p><i>Why do you think SSL/HTTPS is important? Please provide at least 3 reasons.</i></p>
            <h3>Response:</h3>
            <p>* In a word: <b>Authenticity.</b> Having a website with an assigned, valid SSL certificate communicates to any visitors of your website 
                that the website domain is valid and your site is, in fact, the one they intended to be visiting. Which leads to my next point.</p>
            <p>* <b>Security.</b> An SSL certificate allows for a secure session to be established which allows for encrypted communication to occur. This is crucial if I am attempting to run an ecommerce 
                site. </p>
            <p>* <b>Privacy/Data Integrity.</b> Having a secured connection between a web server and browser minimizes the risk of data being intercepted or 
                tampered with while in transit. This is again crucial where visitors and/or customers of a website are inputing their personal data. A customer being able to see "HTTPS" in the address line of the website communicates
                that this connection is secure and encrypted. 
            </p>
            
           
           
            <h2>Question 6:</h2>
            <p><i>Explain, in a couple of paragraphs, what you think 2 major challenges around DNS configuration are for less-technical customers hosting websites.</i></p>
            <h3>Response:</h3>
            <p>* One of the first challenges I see less-technical customers encounter with DNS is when they first register their domain with an External DNS registrar.
                Quite often, it is extremely easy to shop different domain registrars, find the domain name you want at a price point that is appealing and then purchase the domain successfully. However,
                the challenge quickly becomes how to configure your DNS to work with any third party services you may need. (CDN, external load balancers) Some third-party services and DNS providers are good about writing
                documentation and help articles with screenshots of how to configure for more commonly used services.  </p>

            <p>* Additionally, the challenges of administering DNS records can also hinder obtaining an SSL certificate for a website. DNS validation is crucial for SSL certificate issuance because it allows for a certificate to be 
                issued to a cluster of web servers running behind a load balancer. Reference: <a href="https://letsencrypt.org/docs/">https://letsencrypt.org/how-it-works/</a> Knowing exactly which type of DNS records to add to a site in order
                for DNS validation to occur can be a daunting task if there is not clear documentation to follow. </p>
            
            
            
            <h2>Question 7:</h2>
            <p><i>A customer writes in saying their “site won’t build”. You have access to their build logs, and there you see this error:</i></p> 
            <p><code>Build failed due to a user error: Build script returned non-zero exit code: 2. </code></p>
            <p><i>You have no more information than this and the site’s source repository is private so you cannot test the build yourself. How would you troubleshoot this issue? Please compose your best customer-facing answer.</i></p>
            <h3>Response:</h3>
                        <p>* "Hello,  </p>
            <p>Thank you for contacting Netlify Support. I'm sorry to hear you are encountering a build failure and will help you to resolve this issue. While your site source is private, we do have some internal logging of the attempted build deployment that can give me some clues as to what might be happening. </p>
            <p>What I found was an error message <code>Build script returned non-zero exit code:2</code> for the most recent build attempt. Could you answer the following questions to help us in our investigation? </p>
            <p>* Are you attempting to publish this build via a Continous Integration (CI) tool such as Travis CI or Github Actions? If so, this <a href="https://answers.netlify.com/t/new-ci-true-build-configuration-treating-warnings-as-errors-because-process-env-ci-true/14434">Support Article</a> on settings unique to CI is helpful. For instance, it may be necessary to adjust your build command to <b>CI= npm run build</b>.</p>
            <p>* Does your site successfully build in your local environment?</p>
            <p>* If your answer is a "No" to the above questions, would you be willing to enable debug mode and attempt your build again? </p>
            <p>    This is done in the Netlify UI by setting the environment variable <b>NETLIFY_BUILD_DEBUG</b> to <b>true</b></p> (More on this can be found in our Support Guide <a href="https://answers.netlify.com/t/support-guide-frequently-encountered-problems-during-builds/213#before-you-begin-switch-on-debug-mode-2">here</a>)
            <p>I look forward to your response and in assisting you to resolve this issue.</p>
            <p>Best Regards,</p>
            <p>Netlify Support"</p>
           
            
            <h2>Question 8:</h2>
            <p><i>How would you set up an http 301 status redirect from “/netlify/anything” on your site, to <a href="https://www.google.com/search?q=anything">https://www.google.com/search{'>'}q=anything</a> How about a proxy redirect? Please add that proxy redirect rule to your site.</i></p>
            <h3>Response:</h3>
            <p>* Well, I attempted to add a 301 redirect for my <b> About</b> page by adding it to my site's <code>netlify.toml</code> file after reading <a href="https://www.netlify.com/blog/2019/01/16/redirect-rules-for-all-how-to-configure-redirects-for-your-static-site/">blog post</a>. 
            However this does not seem to be working for me as I thought it would. I do see this loaded successfully in my deploy log, however, when I visit www.saltspell.io/about it does not redirect as I expected. I suspect this 
            might be due to a <b>Next.js</b> setting that I have not accounted for on my website.</p>
            <p><b>UPDATE:</b></p> - I got this to work! I had originally just added <b>/about</b> in my <b>netlify.toml</b> file as the page to redirect. After looking at this more closely, 
            I realized I needed to add <b>/posts/about</b>. After updating this to
            the correct page in my <b>.toml</b> file, this now works: <a href="https://www.saltspell.io/about">https://www.saltspell.io/about</a>
            


            <h2>Question 9:</h2>
            <p><i>Please attempt to deploy a function on our service. This need not be complicated, could be "Hello World" or something fancier. Note that failure to deploy is not failing the exercise! 
                Whether you have trouble or not, please describe what you experienced and how you attempted to troubleshoot, instead. We won't be asking you to share the function (but you can if you want to!), we just want to hear about the experience in some detail.</i></p>
            <h3>Response:</h3>
            <p>* I must admit, I saved this one for last and now I am regretting doing so. When I initially scoped out this task and quickly reviewed some of the <a href="https://docs.netlify.com/functions/configure-and-deploy/">documentation available on Functions,</a> I thought, "Oh, that is relatively straight forward. I'll leave this one for last."</p>
            <p>* On reviewing the prerequisites for <a href="https://docs.netlify.com/functions/configure-and-deploy/">configuring the functions folder</a>, I suddenly realized I do NOT have a <b>Base Directory</b> set in my Site Settings! I find this extremely baffling and it
            has led me to having more questions at this point. To be painfully honest, the first question that entered my mind was "How is this site building successfully, thus far, if I don't have a Base directory set?!?"</p>

            <p>There are some great Examples and Tutorials available at <a href="https://functions.netlify.com/">https://functions.netlify.com/</a> dating back a few years! There is almost too much help in documentation to the point of overwhelming! (Not Really - but it just feels that way when one is limited on time.) I could spend days testing and trying different fun to use functions on my site, honestly, and
            I would find it all quite enjoyable. I did find the most intriguing walkthroughs and demonstrations to be on <a href="https://explorers.netlify.com/">https://explorers.netlify.com/</a></p>
            <p>What was kind of the final piece of documentation I encountered that made me think this may take much more time than I have alotted was this piece of information:</p> 
            <p><i> "Though we process the files in the functions directory after running your build command, the directory is not visible over the web unless you place it in your site’s publish directory (not recommended)."</i></p>
            <p>I initially thought I could place a functions folder in my <b>publish</b> directory to make this work, but the "not recommended" in the above documentation has made me think otherwise. At time, it is unclear to me why this is not a recommended method.</p>
            <p>Sadly, I will have to accept the fact I must leave this task for another day. My apologies.</p>


            <h2>Question 10:</h2>
            <p><i>We understand you don't know anything about our internal procedures at this stage, but we want you to explain at a high level how you'd react to this situation: 
                You receive a report of a severe security issue on www.netlify.com. You can't immediately confirm, so what steps might you take to investigate or substantiate the report? What might you say to the reporter, even though 
                we haven't confirmed their assertion yet, that will still leave the true impression that our business is very concerned about security? You believe there is a reasonable chance the report is correct and the problem is very large and impactful. How might you escalate?</i></p>
            <h3>Response:</h3>
            <h4>My internal response:</h4> I would reach out to my manager and any other leadership as well as alert our Security Team of this potential security risk. I would then provide the following potential response
                as a draft to those same individuals to seek approval before sending. 
            <h4>My public response:</h4> Would be the following:
            <p>"Hello, </p>
            <p>-Thank you for contacting Netlify Support and bringing this security issue to our attention. The security of our services, website, and customers is of the utmost importance to us and we fully investigate all issues with the highest priority. To help us in our investigation, we do have a few questions that we 
                hope you will answer for us.</p> 
                <p>Could you list the steps you performed to identify or encounter this issue? Would you be willing to provide us with any relevant screenshots? When did you first encounter this issue?</p>
                
                <p>Again, thank you for taking the time to report this matter to us. We may reach out again with additional questions. </p>
                
                <p>Best regards, </p>
                <p>Netlify Support"</p>
           
            <h4>Side Note:</h4> 
            <p>I was reviewing the main <a href="https://www.netlify.com/">Netlify Website</a> and discovered the link for reporting "Abuse" at the very 
            bottom of the page does not seem to be formatted correctly.</p>

            <p>It looks like its intention is to generate an email but it instead will 
            open a new browser tab with a title heading of:</p>


            
            <p> 
                <b>mailto:fraud@netlify.com?subject=Abuse%20report&body=Please%20include%20the%20site%20URL%20and%20reason%20for%20your%20report%2C%20and%20we%20will%20reply%20promptly.</b>
                
                </p>


            <h2>Question 11:</h2>
            <p><i>(optional/bonus) Could you give us a suggestion to improve this test or the job posting?</i></p>
            <h3>Response:</h3>
            <p>* At this time, I don't really have a suggestion to improve this test. I find this entire exercise to be very balanced between working with the Netlify platform and authoring responses for the scenarios provided. Please do keep this balanced approach as I feel it matches the job posting quite well! No matter the outcome, I did find this test/technical exercise quite a lot of fun. 
                OH! And the 30/60/90 day plan listed right in the job listing is something I greatly appreciate and find most valuable! Thank you! </p>
      




        <Link href="/">
          <a>Back to Home</a>
        </Link>
    </>
  )
}