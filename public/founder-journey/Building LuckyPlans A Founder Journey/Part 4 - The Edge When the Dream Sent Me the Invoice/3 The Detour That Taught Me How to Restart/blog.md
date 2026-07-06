# The Detour That Taught Me How to Restart

After months of failure, research, and strategy validation, I reached a strange conclusion.

LuckyPlans was not dead, but it could not continue in the same way.

The first journey had taught me too much to ignore. A beautiful backtest was not enough. A great-looking trader was not enough. A working system was not enough. Even a flexible architecture was not enough if the validation process, risk discipline, and research infrastructure were still immature.

By early 2026, I understood that finding a truly robust strategy would require something much more serious than one script running on one machine while I refreshed logs at night like a suspicious security guard.

I needed a stronger research system.

Distributed Optuna optimization. Central orchestration. Parallel strategy search. Forward validation across multiple windows. More realistic cost modeling. A way to test many strategy candidates without falling in love with the first nice-looking graph.

In short, LuckyPlans needed to become more like a research laboratory and less like one tired founder asking his laptop to please find alpha before morning.

That was the plan.

But before I fully built that next research infrastructure, life gave me a detour.

And unexpectedly, that detour became one of the reasons I could return to LuckyPlans with a completely new mindset.

## The Cybersecurity Detour

Around that period, I had the chance to work with an Israeli founder who was building a cybersecurity product.

At first glance, this had nothing to do with LuckyPlans.

It was not trading.
It was not DeFi.
It was not perp DEX infrastructure.
It was not copy trading, backtesting, or strategy optimization.

The product was focused on identity governance and administration, especially an IGA platform connector layer.

But it was not just a normal connector system.

The goal was much more ambitious.

They wanted to build an AI-agent-based connector platform that could understand IGA systems like SailPoint, study legacy application architecture, analyze authorization logic, read official documentation and provided customer data, and then generate highly accurate connectors automatically.

That was a very different kind of problem.

In traditional software, connectors are usually painful but understandable. You read docs, inspect APIs, map fields, handle authentication, write integration logic, test edge cases, and then discover that the customer’s “standard setup” is actually a museum of enterprise decisions from three different decades.

Very normal enterprise fun.

But this project asked a harder question:

**Can an AI agent learn enough about a platform and a legacy system to generate connector logic with extremely high accuracy?**

That was not a small automation problem.

It was closer to turning documentation, architecture, and access-control logic into reliable software output.

And reliability was the hard part.

## The Real Challenge Was Not “Use AI”

A lot of people talk about AI as if using an LLM is the product.

Add a chatbot.
Add a prompt.
Add a sparkle icon.
Now it is an AI startup.

This project was not like that.

The challenge was not simply making an LLM generate something. LLMs can generate something very easily. Sometimes too easily. They are very generous machines. Ask for code, they give code. Ask for an explanation, they give explanation. Ask for confidence, they give confidence even when they should probably sit quietly and think again.

The real challenge was making the output accurate, repeatable, and reliable enough for enterprise workflows.

That changed the nature of the work.

We had to think about how to structure context, how to evaluate outputs, how to reduce randomness, how to guide the model through complex requirements, and how to make the system produce results that were not just impressive in a demo, but actually trustworthy.

This was familiar to me in a strange way.

In LuckyPlans, I had learned that a result looking good was not enough. A backtest could look great and still fail under stronger validation. In the AI-agent project, I saw a similar lesson from a different angle: an LLM output could look great and still be unreliable if the system around it was weak.

Different domain.

Same uncomfortable truth.

A beautiful output is not proof.

## Learning the New Builder Workflow

Working on that product exposed me to a much more modern development workflow.

Vibe coding. AI-assisted architecture. LLM agents. Claude and Codex-style development. Faster prototyping. Accuracy evaluation. Iteration loops where a founder or senior engineer could move from idea to working prototype much faster than before.

This was not the same world I had started LuckyPlans in.

When I began the first LuckyPlans journey, most of the difficult work still had to be designed and implemented manually. AI tools existed, but they were not as capable as what I was seeing by 2026. The difference was not small.

It felt like the developer environment had changed under my feet.

In 2024, building a serious MVP still often felt like a team sport by default. You needed frontend, backend, infrastructure, product thinking, testing, deployment, and iteration. Even if one engineer could do many of those things, the time cost was heavy.

By 2026, the equation had changed.

Not completely. Not magically. Not in the “one prompt builds a real company” fantasy way.

But enough to matter.

A skilled solo founder who understands software architecture, product tradeoffs, and engineering quality could move much faster with modern AI tools. A POC that might have taken weeks could sometimes be shaped in days. An MVP that previously required a small team could be built to demo quality by one capable builder in a much shorter period.

That realization hit me hard because I immediately compared it with LuckyPlans.

The first LuckyPlans journey took almost a year: POC, MVP, V1, V2, backtests, copy trading systems, leaderboard infrastructure, platform adapters, strategy research, and many painful lessons along the way.

At the time, that speed felt normal because I was building almost everything the hard way.

But after working in an AI-native development flow, I started thinking:

**“If I had this workflow from the beginning, how different would LuckyPlans have been?”**

And the answer was obvious.

Very different.

## Founder Speed Changed

The biggest shift was not only coding speed.

It was founder speed.

That is different.

Coding speed means writing implementation faster. Founder speed means reducing the time between idea, prototype, validation, feedback, correction, and next attempt.

LuckyPlans had suffered partly because every cycle was expensive.

A new idea took time to implement.
A new backtest structure took time to build.
A new platform integration took time to research.
A new strategy experiment took time to run.
A new UI or workflow took time to polish.

When each cycle is slow, you naturally become attached to the result. You spend so much time building one path that it becomes emotionally difficult to admit the path may be wrong.

AI-native development changes that relationship.

If you can prototype faster, you can be less emotionally attached to each version. You can test more ideas, throw away bad ones earlier, and reserve your serious emotional investment for things that survive validation.

That was exactly what LuckyPlans needed.

Not more blind speed.

Smarter speed.

The difference matters.

Blind speed is how I reached the wall faster in Part 3.

Smarter speed is how I could rebuild without repeating the same mistake.

## A New Way to Think About LuckyPlans

The cybersecurity work did not solve LuckyPlans directly, but it gave me a new lens.

Before, I thought the next LuckyPlans step required a huge amount of manual development: distributed research infrastructure, orchestration, validation systems, dashboards, strategy modules, better monitoring, more realistic simulations, and possibly agent-like research workflows.

That still sounded correct, but it also sounded heavy.

After experiencing modern AI-assisted development, the same plan felt more reachable.

A distributed optimization system no longer felt like a mountain that required a large team before I could even start. It felt like something I could build iteratively: first a simple orchestrator, then worker processes, then result evaluation, then validation windows, then dashboards, then strategy comparison tools.

Instead of thinking, “This will take forever,” I started thinking:

**“This can be built step by step, much faster than before, if I use the right workflow.”**

That gave me energy again.

Not the naive energy from the first backtest moon moment.

This was different.

It was quieter.

More practical.

Less romantic, but more useful.

The first LuckyPlans journey had taught me what not to trust too quickly. The AI-agent work taught me how much faster and smarter the next version could be built.

That combination mattered.

Pain without a better method can become depression.

A better method without pain can become arrogance.

I now had both: the pain and a better method.

Very expensive education, but at least the curriculum was complete.

## The Restart Was Not About Forgetting

By May 2026, I did not feel the same as I did when LuckyPlans first started.

The first version of me was chasing the spark.

One trader. One question. One exciting possibility.

The second version of me was chasing proof.

Backtests, leaderboards, execution, platform expansion.

After the failure, I had to become a third version.

More skeptical. More careful. More aware of fees, slippage, overfitting, regime changes, infrastructure cost, and my own tendency to get excited when a graph looks too beautiful.

But the detour gave me something important: I did not have to rebuild LuckyPlans with the same slow and exhausting process.

I could restart with a new mindset.

AI-native development. Faster iteration. Better validation. More disciplined strategy research. Less blind confidence. More evidence. More willingness to let weak ideas die before they touched real money.

That was the real value of the detour.

It did not erase the previous failure.

It gave me a way to use it.

## The Lesson

Looking back, the cybersecurity project was not a distraction from LuckyPlans. It was part of the journey, even though I did not know it at the time.

It taught me that modern AI tools were no longer just small helpers for autocomplete or boilerplate. They could change how a founder explores ideas, builds systems, validates workflows, and moves from concept to demo.

It also taught me that speed alone is not enough. In both AI systems and trading systems, the output must be tested, evaluated, and made reliable. A fast hallucination is still a hallucination. A fast bad strategy is still a bad strategy. Faster tools only help if the validation process becomes stronger too.

That became the new foundation for LuckyPlans.

The first journey taught me humility.

The detour taught me speed.

Together, they gave me a reason to restart.

I did not come back to LuckyPlans because I forgot the pain.

I came back because I finally had a better way to build after the pain.
