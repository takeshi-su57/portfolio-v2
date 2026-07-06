# From Copy Trading to Strategy Building: The Backtest That Fees Destroyed

After I accepted that copying great-looking leaders was not enough, the next question became unavoidable.

If I should not only ask **“Who made money?”**, then what should I ask?

The answer was simple, but much harder to deal with:

**“How did they make money?”**

That question changed the direction of LuckyPlans.

Until that point, a large part of my thinking was still focused on trader selection. Find strong leaders, analyze their history, group them into plans, and execute based on their behavior. That approach made sense in the beginning because LuckyPlans was born from a public leaderboard and one trader who looked almost too good to ignore.

But after the failure, I could not look at leaderboards in the same way anymore.

A leaderboard could tell me who had won.
It could not fully tell me why they had won.

And without understanding the “why,” I was only looking at the surface.

## The Question Behind the Leaderboard

From November 2025, I started researching trading strategies more seriously.

Not just copy trading. Not just perp DEX mechanics. Not just trader rankings.

Actual strategy behavior.

I studied trend following, mean reversion, range trading, grid-style behavior, market regimes, risk patterns, and the different ways traders survive or die in changing market conditions.

That last part matters.

Some traders do not fail because they are bad. They fail because their strategy works beautifully in one market condition and gets punished in another. A trend follower can look like a genius during strong directional moves, then look confused in a choppy market. A range trader can print steady profits while the market is calm, then get destroyed when price breaks out violently. A mean-reversion trader can look disciplined until the market decides not to revert and just keeps going like it has personal anger.

The more I studied, the more I realized that many leaderboard profiles were not just “good” or “bad.”

They were strategy fingerprints.

So I went back to my LuckyPlans leaderboard with a different mindset. I was no longer looking only for high PnL, high win rate, or smooth growth. I started trying to understand the behavior behind the numbers.

Some traders looked like they were riding trends.
Some looked like they were trading ranges.
Some were probably using mean reversion.
Some were aggressive and regime-dependent.
Some were stable until the exact moment they were very much not stable.

This was an important shift.

LuckyPlans could not remain only a copy trading system. It had to become a system that could understand and test strategy logic.

That was the beginning of my move from copying traders to building my own algo trading framework.

## Building My Own Strategy System

I decided to build a separate algo trading bot under the same LuckyPlans journey.

This was not a replacement for everything I had built before. The copy trading system, leaderboard, historical data, and trader analysis were still valuable. But now I wanted a more direct way to test strategy ideas myself.

If I could understand the logic behind trader behavior, maybe I could build strategies that did not depend on blindly following one public leader.

Over the next two months, I built a new backtesting system and a composable strategy model.

The important part was composability.

I did not want to hard-code one strategy and call it a day. That would be too narrow. I wanted a structure where different components could be replaced, combined, and tested. Entry logic, exit logic, filters, stop-loss behavior, take-profit rules, market-condition checks, and position-sizing ideas could all become pieces of a larger strategy definition.

In other words, I wanted LuckyPlans to move from:

**“Here is one strategy I guessed.”**

to:

**“Here is a flexible system where many strategy structures can be tested.”**

That made the system much more powerful.

It also made it much more dangerous, because when a system can test many ideas, it can also discover many beautiful lies.

But I did not fully appreciate that yet.

I was still in the engineering recovery phase, where building something flexible feels like healing.

Very emotional. Very TypeScript.

## Manual Guessing Was Too Slow

At first, I tested strategies manually.

I looked at trader behavior, guessed a structure, adjusted the parameters, ran a backtest, inspected the result, changed the logic, and repeated the process.

That worked for learning, but it was painfully slow.

Manual strategy design is interesting for the first few rounds. After that, it starts to feel like trying to unlock a safe by emotional guessing.

Maybe this filter?
Maybe this stop-loss?
Maybe this window size?
Maybe this threshold?
Maybe I should go outside and touch grass?

The search space became too large very quickly.

Even a simple strategy can have many parameters. Once you add multiple indicators, filters, exits, and risk settings, the number of possible combinations explodes. I needed a better way to search.

So I tried grid search.

Grid search was simple and honest. It tested parameter combinations across fixed ranges and reported the results. The problem was that it was also very inefficient.

If the search space is small, grid search is fine. If the search space is large, grid search becomes a very hardworking intern with no sense of priority.

It checks everything.

Even the obviously bad ideas.

Very loyal.

Very expensive.

Not smart enough.

That was when I found Optuna.

## Optuna Entered the Room

Optuna changed the research process.

Instead of blindly testing every possible combination, it could search parameter ranges more intelligently and focus on promising areas. It was not magic, but compared with manual guessing and grid search, it felt like a serious upgrade.

For LuckyPlans, this was exciting because my composable strategy model could expose parameter ranges, and Optuna could automatically search for better configurations.

Now the process became more systematic.

Define the strategy structure.
Define parameter ranges.
Run optimization.
Evaluate results.
Let the optimizer search for stronger candidates.

After about one week of running research, Optuna found a strategy that looked great in the backtest.

The result had the familiar dangerous smell.

A strong curve.
Good returns.
Reasonable drawdown.
Enough trades to look meaningful.
A structure that seemed to make sense.

In Part 3, this kind of result would have made me want to execute immediately. I would have stared at the graph, felt the moon getting closer, and started preparing the rocket with very questionable emotional risk management.

But this time was different.

The previous failure had made me slower.

Not less excited, but more suspicious.

And suspicion is underrated in trading research.

## The Backtest Was Missing the Real World

When I reviewed the result more carefully, I noticed a serious problem.

The backtest was not realistic enough.

It did not properly include the real trading costs that quietly decide whether a strategy is actually profitable:

Fees.
Spread.
Slippage.
Execution friction.

These sound like small details when you are looking at a beautiful return curve. They are not small details.

They are the little termites inside the wooden house.

From far away, the house looks fine.

Then one day the floor disappears.

I added more realistic fee, spread, and slippage modeling into the backtest.

Then I ran the strategy again.

The profitable strategy was no longer profitable.

That was painful, but it was also progress.

Because this time, I did not send money first and learn later. I let the model become more honest before execution. The result was disappointing, but disappointment inside a backtest is much cheaper than disappointment on mainnet.

That was a clear sign that I had changed.

In Part 3, a beautiful backtest made me execute too quickly.
In Part 4, a beautiful backtest made me ask what it was hiding.

That is not as exciting, but it is much healthier.

## The Second Beautiful Result

After improving the cost model, I ran Optuna again.

Another week passed, and the optimizer eventually found a new strategy that still looked strong even after considering fees and execution costs.

This was encouraging.

The system had survived one harder filter. The result looked more realistic than the previous one. It was tempting to believe that this time the research had finally found something solid.

But I did not want to repeat the same mistake with a more sophisticated tool.

So I kept researching.

That is when I learned one of the most important lessons about optimization:

A powerful optimizer does not only find good strategies.

It can also find historical noise very efficiently.

That sentence sounds boring until you realize how dangerous it is.

Optuna is powerful because it can search large parameter spaces and discover combinations that produced strong historical results. But markets are noisy. Historical data contains patterns that may never repeat. If the optimizer is given enough flexibility, it can find combinations that look brilliant in the past simply because they accidentally matched that specific period.

In other words, the optimizer may not be discovering an edge.

It may be discovering a very well-dressed coincidence.

And in trading, coincidences can look extremely professional in a backtest report.

## Forward Validation: Asking the Strategy to Prove Itself Again

To challenge the result, I started applying forward-based verification with different windows.

The idea was simple: if the strategy only performs well on the data used during optimization, I cannot trust it. It needs to survive outside the exact period where it was discovered.

So I tested it across different time windows and validation periods.

That was where the strategy started to fail.

The beautiful result did not generalize well.

It looked strong in the optimized period, but it did not hold up consistently when tested forward. The performance became unstable, and the confidence I wanted was not there.

So I marked it as noise.

That decision was not fun.

After weeks of research, it is very tempting to protect a good-looking result. You want the strategy to pass because you already spent time building the system, designing the model, and waiting for optimization runs.

But the whole point of better validation is to make it harder for me to lie to myself.

This time, I chose not to execute.

That felt like a loss at first, but it was actually a win.

A quiet win.

The kind of win where nothing dramatic happens because you prevented the drama.

Very boring.

Very valuable.

## The System Needed More Than One Machine and Hope

By March 2026, I reached another conclusion.

Finding a truly robust strategy would require much more serious research infrastructure.

It was not enough to run one optimizer, find one result, and celebrate. The process needed distributed optimization, better orchestration, multiple validation windows, more careful cost modeling, and a way to compare strategy candidates without falling in love with the first beautiful graph.

I started thinking about a distributed Optuna optimization and validation system with central orchestration.

The idea was to run many experiments in parallel, coordinate them centrally, and evaluate strategies not only by their best historical return but by their ability to survive harder tests.

This was not just about making research faster.

It was about making the research process less naive.

Because after everything that had happened, I did not want LuckyPlans to be a machine that generates confidence.

I wanted it to become a machine that attacks confidence until only stronger ideas remain.

That is a very different product philosophy.

And honestly, a much better one.

## The Lesson

This period changed the way I looked at backtesting.

Before, backtesting felt like a proof engine. Run the past, see the result, gain confidence.

Now I saw it differently.

A backtest is not proof. It is a question.

It asks:

Would this have worked in the past, under the assumptions I included?

That last phrase matters.

**Under the assumptions I included.**

If fees are missing, the backtest is incomplete.
If spread is ignored, the backtest is generous.
If slippage is missing, the backtest is polite fiction.
If forward validation fails, the strategy may just be historical noise wearing a nice suit.

This was the technical recovery chapter of LuckyPlans, but it was also a maturity chapter for me.

I was no longer asking the backtest to make me excited.

I was asking it to survive harder questions.

A strategy is not real just because the backtest looks good. It has to survive fees, spread, slippage, forward validation, market changes, and the uncomfortable possibility that the optimizer found the past instead of the edge.

In Part 3, I lost money because I trusted a beautiful backtest too quickly.

This time, I did not lose money to the backtest.

I let the backtest lose the argument first.
