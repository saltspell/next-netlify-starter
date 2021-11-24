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
                basic templates out there for <code>Next.js</code>. But that doesn't matter. It was fun just to deploy this!</p>
            <p>* I chose a template for <code>Next.js</code>because I have never worked with it before and I wanted to understand how the page Linking functioned, in particular.</p>
            <p>* One challenge I ran into was with the DNS setup for an apex domain. I already had a domain parked and I am not using Netlify DNS for this site. 
                Normally, I would have set the `www` as the subdomain but the <a href="https://docs.netlify.com/domains-https/custom-domains/multiple-domains/#apex-domains-and-www-subdomains">Netlify documentation</a> specifically states when using external DNS, 
                it is <b>strongly recommended</b> to set the `www` subdomain as the primary domain. Saved hours of troubleshooting DNS issues by reading the documentation! :gratitude:
            </p>
        
        <h2>Question 2:</h2>
            <p><i>What did you think of our service during the time you used it? Provide either some constructive criticism or some points that impressed you. 
                Be honest! “It sucked” isn’t a wrong answer unless you don’t elaborate and provide some constructive criticism ;)</i></p>
            <h3>Response:</h3>
            <p>* I did try several other templates located <a href="https://jamstack.org/generators/">on the jamstack.org/generators</a> page, however, the few others I tried failed to deploy out-of-the-box.</p>
            <p>* After briefly looking at the Deploy Log, I see a lot of <code>npm WARN old lockfile</code> warnings and several version conflicts. I am guessing a bit here, but it appears that when the deployment container is assigned, it pulls in the latest packages 
            available on spin-up. My theory is that depending on when the template was originally written, the original dependencies may be outdated and causing several version conflicts, which could result in the deployment failing. </p>
            <p>* What impresses me is just being able to view the Deploy Log! </p>


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
            <p>*  </p>

            <h2>Question 5:</h2>
            <p><i>Why do you think SSL/HTTPS is important? Please provide at least 3 reasons.</i></p>
            <h3>Response:</h3>
            <p>*  </p>
            
            <h2>Question 6:</h2>
            <p><i>Explain, in a couple of paragraphs, what you think 2 major challenges around DNS configuration are for less-technical customers hosting websites.</i></p>
            <h3>Response:</h3>
            <p>* One of the first challenges I see less-technical customers encounter with DNS is when they first register their domain with an External DNS registrar.
                Quite often, it is extremely easy to shop different domain registrars, find the domain name you want at a price point that is appealing and then purchase the domain successfully. However,
                the challenge quickly becomes how to configure your DNS to work with your email and website hosting should you choose to not use the registrar's offerings for either one. Some services are good about writing
                documentation and help articles with screenshots of how to configure for specific DNS providers. Others, not so much. Then, the challenges continue if one is attempting to update DNS records correctly to account for CDN, external load balancers,  </p>
            
            <h2>Question 7:</h2>
            <p><i>A customer writes in saying their “site won’t build”. You have access to their build logs, and there you see this error:</i></p> 
            <p><code>Build failed due to a user error: Build script returned non-zero exit code: 2. </code></p>
            <p><i>You have no more information than this and the site’s source repository is private so you cannot test the build yourself. How would you troubleshoot this issue? Please compose your best customer-facing answer.</i></p>
            <h3>Response:</h3>
            <p>*  </p>
            
            <h2>Question 8:</h2>
            <p><i>How would you set up an http 301 status redirect from “/netlify/anything” on your site, to <a href="https://www.google.com/search?q=anything">https://www.google.com/search{'>'}q=anything</a> How about a proxy redirect? Please add that proxy redirect rule to your site.</i></p>
            <h3>Response:</h3>
            <p>* Well, I attempted to add a 301 redirect by adding it to my site's <code>netlify.toml</code> file after reading <a href="https://www.netlify.com/blog/2019/01/16/redirect-rules-for-all-how-to-configure-redirects-for-your-static-site/">blog post</a>. 
            However this does not seem to be working for me as I thought it would. </p>
            
            <h2>Question 9:</h2>
            <p><i>Please attempt to deploy a function on our service. This need not be complicated, could be "Hello World" or something fancier. Note that failure to deploy is not failing the exercise! 
                Whether you have trouble or not, please describe what you experienced and how you attempted to troubleshoot, instead. We won't be asking you to share the function (but you can if you want to!), we just want to hear about the experience in some detail.</i></p>
            <h3>Response:</h3>
            <p>*  </p>
            
            <h2>Question 10:</h2>
            <p><i>We understand you don't know anything about our internal procedures at this stage, but we want you to explain at a high level how you'd react to this situation: You receive a report of a severe security issue on www.netlify.com. You can't immediately confirm, so what steps might you take to investigate or substantiate the report? What might you say to the reporter, even though we haven't confirmed their assertion yet, that will still leave the true impression that our business is very concerned about security? You believe there is a reasonable chance the report is correct and the problem is very large and impactful. How might you escalate?</i></p>
            <h3>Response:</h3>
            <p>*  </p>
            
            <h2>Question 11:</h2>
            <p><i>(optional/bonus) Could you give us a suggestion to improve this test or the job posting?</i></p>
            <h3>Response:</h3>
            <p>*  </p>
      




        <Link href="/">
          <a>Back to Home</a>
        </Link>
    </>
  )
}