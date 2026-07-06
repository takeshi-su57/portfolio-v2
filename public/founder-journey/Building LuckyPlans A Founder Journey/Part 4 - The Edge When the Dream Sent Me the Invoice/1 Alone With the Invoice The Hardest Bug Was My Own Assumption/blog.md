# Alone With the Invoice: The Hardest Bug Was My Own Assumption

After the V2 wall hit, I had to admit something that was harder than fixing any contract integration, indexer bug, or backend failure.

LuckyPlans had become stronger technically, but that did not make the result stronger.

The architecture was better. The system was more flexible. It was no longer tied to one perp DEX, and the idea had grown from a simple copy trading concept into something closer to multi-platform trading infrastructure. From an engineering point of view, that was real progress.

But trading did not care.

The market did not look at my adapters, event parsers, ABIs, and platform abstractions and say, “Nice architecture. Here is your profit.”

Instead, it sent me the invoice.

And unfortunately, this invoice was not from AWS. At least AWS gives you a dashboard before hurting you.

This one was more personal.

## When the Shared Journey Became a Lonely One

Until that point, LuckyPlans had not been only my journey. My brother Hiroshi had been there through some of the most important parts: the backtest idea, the parameter research, the strategy discussions, the first serious execution attempts, and even the painful moments when the system did not behave the way we expected.

He was not just cheering from the side. He was thinking with me, challenging me, and sometimes stopping my excitement from becoming completely irresponsible. Not always successfully, but he tried.

After the failure, however, he had to step back.

He had his own business, responsibilities, and life to manage. He could not continue walking every step of LuckyPlans with me. Honestly, he handled that transition much better than I did. He could return to his previous company and continue his own path. He was disappointed, of course, but he was not lost.

I was different.

Earlier in 2025, when I decided to seriously pursue LuckyPlans, I had already accepted that this could not remain a small part-time experiment forever. If I wanted to make it real, I needed focus, time, and commitment. So I had stepped away from stable company work and put myself fully into the journey.

That made the failure heavier.

Because after the wall, I did not only need to understand why the system failed. I also needed to find stable income again.

That is the part of the founder journey people do not always make into nice Twitter threads. The product fails, your confidence drops, and then normal life enters the room wearing office shoes and asks, “So, what is your plan for rent?”

Very motivational.

## Job Search by Day, Autopsy by Night

By October 2025, my life had split into two tracks.

During the day, I looked for work. I searched for opportunities, talked with people, and tried to rebuild some financial stability. I had to become practical again. Passion is useful, but passion does not automatically pay invoices, especially when the invoice is from your own failed assumption.

At night, I returned to LuckyPlans.

Not to build another feature immediately. Not to start another refactor. Not to create another version number and pretend that “V3” would magically fix everything.

This time, I needed to understand the failure more honestly.

Why did the backtest look strong but the live result collapse?

Why did great-looking leaders become dangerous copy targets?

Why did a strategy that looked obvious in historical data become weak in real execution?

Why did a stronger technical system still fail to become a stronger trading operation?

Those questions were uncomfortable because they did not point to one clean bug. Engineers like clean bugs. A clean bug is almost generous. You find it, fix it, write a commit message, and recover a little pride.

This was different.

This failure was not hiding inside one function.

It was hiding inside the original belief.

## The Research Became Less Exciting and More Honest

Before the failure, my research had been full of energy. I researched contracts because I wanted to build. I researched leaderboards because I wanted to find opportunities. I researched backtesting because I wanted proof.

After the failure, the tone changed.

I was no longer researching how to make copy trading work. I was researching why copy trading often does not work.

That is a very different kind of search.

I started reading more about similar stories: copy traders who followed great-looking leaders, strategies that looked safe until one large loss erased months of profit, and systems that worked beautifully in historical analysis but became fragile in real execution.

The pattern was uncomfortable, mostly because it sounded familiar.

A public trader looks excellent. Their PnL graph grows steadily. Their win rate looks attractive. Their profile becomes visible. Followers enter after the beautiful part is already obvious.

Then something changes.

The trader takes a large loss. The market regime shifts. The edge disappears. The trader moves to another venue. The copied execution becomes worse than the leader’s execution. Fees, spread, slippage, timing, and liquidation risk quietly eat the difference.

From far away, copy trading looks like borrowing someone else’s intelligence.

Up close, it often becomes borrowing someone else’s risk after the reward has already been advertised.

That realization was painful, because LuckyPlans had started from exactly that emotional trigger. I saw a trader with an amazing profile and asked the question that began everything:

“Can I just copy him?”

It was a powerful question.

But after the failure, I had to ask the colder version:

“Did I find a real future opportunity, or did I find a beautiful historical artifact?”

That second question is much less fun at 2 a.m.

## The Public Leader Problem

One of the hardest assumptions to challenge was the idea that public leaders are reliable long-term copy targets.

If a trader is truly excellent, consistently profitable, and safely copyable, why would that opportunity remain easy and public forever?

A public leaderboard is useful, but it is also unstable by nature. Great traders can hide, move to another platform, change behavior, reduce visibility, or simply lose the edge that made them attractive in the first place. In crypto especially, capital and attention move quickly. A trader who looks dominant on one platform today may disappear, slow down, or move somewhere else tomorrow.

That does not mean leaderboards are useless. Actually, I still believe they are valuable.

But a leaderboard is not a promise.

It is a snapshot.

And a snapshot can be dangerous when you mistake it for a map.

I had treated great-looking leaders as if they were durable assets. In reality, many of them were more like weather conditions. They could be useful, but only if I understood the environment that created them.

## The Beautiful Graph Problem

Another pattern became impossible to ignore: many traders looked stable until they were not.

Their graph would grow smoothly for weeks or months. The performance looked controlled. The drawdown looked acceptable. The confidence looked justified. Then one aggressive position, one market reversal, or one bad risk decision would erase a large part of the previous profit.

This is the trap of a beautiful PnL curve.

It does not only show success. Sometimes it hides the kind of risk that has not appeared yet.

In backtesting and leaderboard analysis, this is especially dangerous because the attractive part of the graph is usually visible before the follower enters. A follower does not join at the beginning of the trader’s edge. A follower joins after the trader already looks good enough to follow.

That means the follower may be late.

Late to the edge.
Early to the collapse.

That is a terrible subscription model.

The more I researched, the more I understood that the original LuckyPlans idea was not wrong, but it was incomplete. Finding a great-looking leader was not enough. I needed to understand what kind of strategy the leader was using, what market regime supported that strategy, how much hidden risk existed, and whether the performance could realistically be copied after fees, spread, slippage, and execution delay.

In other words, LuckyPlans could not only ask, “Who is winning?”

It had to ask, “Why are they winning, and can that behavior survive when copied?”

That was a much harder product.

And probably a much more honest one.

## The Startup or Expensive Hobby Question

During this period, I also had to ask a question I did not enjoy:

Was LuckyPlans still a startup direction, or had it become an expensive hobby with a very serious backend?

That question hurt because the work was real. I had not been playing around. I had built actual systems, handled real on-chain data, designed backtesting logic, integrated platforms, and executed real trades. The journey had technical substance.

But substance alone is not enough.

A startup needs a path to proof, users, value, and survival. An expensive hobby can also have impressive architecture, late-night commits, dashboards, and a founder who explains everything with intense eye contact.

From the outside, they can look strangely similar.

The difference is whether the work is moving toward evidence or only protecting the founder’s belief.

That was the uncomfortable part. Some parts of LuckyPlans were clearly progress. Some parts were still assumption. And some parts were probably me trying to avoid admitting that the first version of the story had broken.

## A New Kind of Debugging

By November and December 2025, I realized that the real debugging work had changed.

I was no longer debugging only the indexer, the bot, the vault logic, or the platform adapter. I was debugging the mental model that made me believe the system should work in the first place.

That is much harder.

Code usually tells you when it is wrong. The compiler complains. The test fails. The logs scream. Sometimes the server dies dramatically, just to make sure you are paying attention.

Assumptions are quieter.

They sit underneath your decisions and make everything feel reasonable until the result proves otherwise.

My assumption was simple:

If I can find great traders, analyze them well, and copy them through a strong system, then LuckyPlans can create value.

After the failure, that assumption needed to be rewritten.

The better version was more complicated:

If I can understand trader behavior, identify the strategy behind it, verify whether that strategy survives different market conditions, model realistic execution costs, and operate with strict risk discipline, then maybe LuckyPlans can create value.

Less catchy.

Much more accurate.

And definitely harder to put on a landing page.

## The First New Direction

Even though this period was depressing, it did not end in complete darkness.

The research slowly gave me a new direction.

If copying leaders was not enough, then I needed to understand strategies.

Not only profiles.
Not only win rates.
Not only PnL curves.

Strategies.

Trend following. Mean reversion. Range trading. Grid-like behavior. Market regimes. Risk patterns. Position sizing logic. The actual behavior behind the leaderboard numbers.

I became interested in what my leaders were really doing.

Were they riding trends? Were they fading moves? Were they surviving in ranges? Were they increasing risk after losses? Were they skilled, lucky, or simply in the right market condition at the right time?

Those questions became the bridge to the next phase of LuckyPlans.

The project had started with copy trading, but after the invoice arrived, I understood that the next version had to go deeper. It had to analyze the logic behind traders, not just copy their actions.

That was the beginning of the shift from copy trading to strategy research.

## The Lesson

Looking back, October to December 2025 was not a clean comeback story.

It was messy. I needed stable income again. My brother stepped back. I was alone with the result. During the day, I tried to recover my practical life. At night, I tried to understand why the idea had failed.

But that period was necessary.

It taught me that failure is not always a signal to quit. Sometimes it is a signal that your explanation was too simple.

LuckyPlans did not fail only because of one server issue, one RPC problem, one bad setting, or one platform limitation. Those things mattered, but they were not the deepest problem.

The deeper problem was that I had trusted the idea of a great-looking leader too much.

A leader is not a strategy.

A leaderboard is not proof.

A backtest is not a guarantee.

And a working system is not automatically a winning plan.

For the first time, I was not debugging a contract, an indexer, or a bot. I was debugging the reason I believed this should work.

The hardest bug was not in the codebase.

It was in my assumption.
