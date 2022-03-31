import Link from 'next/link'

export default function technicalexercise() {
  return (
      <>





      <h1>Technical Exercise!</h1>
        <h2> Question 1:</h2>
            <p><i>Talk about how you made your site and why you chose the tools you did. 
                Briefly explain one challenge you experienced in setting up this site and how you solved it.</i></p>
            <h3>Response:</h3>
           
        
        <h2>Question 2:</h2>
            <p><i>What did you think of our service during the time you used it? Provide either some constructive criticism or some points that impressed you. 
                Be honest! “It sucked” isn’t a wrong answer unless you don’t elaborate and provide some constructive criticism ;)</i></p>
            <h3>Response:</h3>
          


            <h2>Question 3:</h2>
            <p><i>Rank your 5 favorite, and 5 least favorite, activities from this list: <a href="https://gist.github.com/fool/b0f254ff8c72a5765b6a9138249789d6">https://gist.github.com/fool/b0f254ff8c72a5765b6a9138249789d6</a></i></p>
            <h3>Response:</h3>
            <h4>Favorites!</h4>
          

            <h4>Least Favorites!</h4>
           
            
            
            <h2>Question 4:</h2>
            <p><i>Provide a link to documentation for a technical/developer-focused product, which you think are well done, and explain why you think they are well done.</i></p>
            <h3>Response:</h3>
           

            
            
            <h2>Question 5:</h2>
            <p><i>Why do you think SSL/HTTPS is important? Please provide at least 3 reasons.</i></p>
            <h3>Response:</h3>
         
            
           
           
            <h2>Question 6:</h2>
            <p><i>Explain, in a couple of paragraphs, what you think 2 major challenges around DNS configuration are for less-technical customers hosting websites.</i></p>
            <h3>Response:</h3>
          
            
            
            
            <h2>Question 7:</h2>
            <p><i>A customer writes in saying their “site won’t build”. You have access to their build logs, and there you see this error:</i></p> 
            <p><code>Build failed due to a user error: Build script returned non-zero exit code: 2. </code></p>
            <p><i>You have no more information than this and the site’s source repository is private so you cannot test the build yourself. How would you troubleshoot this issue? Please compose your best customer-facing answer.</i></p>
            <h3>Response:</h3>
           
            
            <h2>Question 8:</h2>
            <p><i>How would you set up an http 301 status redirect from “/netlify/anything” on your site, to <a href="https://www.google.com/search?q=anything">https://www.google.com/search{'>'}q=anything</a> How about a proxy redirect? Please add that proxy redirect rule to your site.</i></p>
            <h3>Response:</h3>
          


            <h2>Question 9:</h2>
            <p><i>Please attempt to deploy a function on our service. This need not be complicated, could be "Hello World" or something fancier. Note that failure to deploy is not failing the exercise! 
                Whether you have trouble or not, please describe what you experienced and how you attempted to troubleshoot, instead. We won't be asking you to share the function (but you can if you want to!), we just want to hear about the experience in some detail.</i></p>
            <h3>Response:</h3>
          

            <h2>Question 10:</h2>
            <p><i>We understand you don't know anything about our internal procedures at this stage, but we want you to explain at a high level how you'd react to this situation: 
                You receive a report of a severe security issue on www.netlify.com. You can't immediately confirm, so what steps might you take to investigate or substantiate the report? What might you say to the reporter, even though 
                we haven't confirmed their assertion yet, that will still leave the true impression that our business is very concerned about security? You believe there is a reasonable chance the report is correct and the problem is very large and impactful. How might you escalate?</i></p>
            <h3>Response:</h3>
           


            <h2>Question 11:</h2>
            <p><i>(optional/bonus) Could you give us a suggestion to improve this test or the job posting?</i></p>
            <h3>Response:</h3>
           


        <Link href="/">
          <a>Back to Home</a>
        </Link>
    </>
  )
}