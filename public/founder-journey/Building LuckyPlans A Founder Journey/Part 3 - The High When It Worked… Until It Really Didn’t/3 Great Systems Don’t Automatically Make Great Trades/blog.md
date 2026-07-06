# Great Systems Don’t Automatically Make Great Trades

After the backtest found its best-looking strategy, patience became difficult.

The curve looked strong. The monthly return looked almost unreal. The system was no longer just copying trades; it was starting to discover plans from historical data. From a builder’s perspective, that felt like a major breakthrough.

Hiroshi stayed careful.

I was careful too, at least officially.

But I was also much less patient.

At some point, I felt we could not keep living inside the backtest. If LuckyPlans was going to become real, then someone had to become the first real user.

And since this was my idea, my system, and apparently my responsibility to learn things the expensive way, that person was me.

Not testnet.

Not mock assets.

Real USDC.

## The First Real Deposit

Before using real money, I had to explain the situation to my wife.

She did not spend months reading smart contracts, tracing event logs, or discussing linear regression with us at night. She did not know every technical detail behind the strategy. But she understood that I was serious, and she trusted my confidence.

That trust mattered a lot.

It also made the decision heavier.

We deposited **5,000 USDC**.

It was not an amount that would destroy our family economy, but it was not small either. It was enough to change the feeling of every transaction.

With testnet money, a trade is interesting.

With real money, a trade suddenly develops a personality.

The system opened the first real position correctly. It was not a simulation, not a test position, and not a database record pretending to be progress. It was a real copied position with real capital behind it.

I was excited. Proud. Calm on the outside.

Internally, I was probably already preparing the launch sequence.

Then one week passed.

Only **four positions** had opened, and the result was not meaningful enough.

That was the first reminder that real markets do not care how dramatic your internal music is.

## The First Explanation: Too Strict

Our first theory was simple: maybe the parameters were too strict.

The system was being too selective. It was filtering too much, waiting too long, and not opening enough positions. That sounded reasonable, so we adjusted the logic and waited for another week.

Automated trading has a strange emotional rhythm. You make a change, deploy it, and then the system does not reward you with immediate feedback. It just sits there quietly, like a very expensive cat.

During that second week, small problems started appearing.

The logger showed errors that were not easy to identify. Some copied positions lost connection with their leader positions. Some cases required manual handling. Certain states looked correct in one place but suspicious in another.

The system was working, but it was not calm.

And when real money is involved, “mostly working” is not a comforting phrase. It is a warning label.

## The Vault Logic Problem

Then I found a more serious issue.

Our vault management logic was wrong.

This was not a frontend bug. It was not a small display problem. It was core system logic, which is exactly where you prefer not to find surprises.

We refactored it, and the system became more stable. Several confusing behaviors started to make sense after the fix. That was progress, but it did not mean the system was ready to relax.

The server still went down once every **four to seven days**.

That changed the nature of the project. LuckyPlans was not only a trading system anymore; it was also something that could interrupt dinner.

Throughout June, we kept improving the engine, watching trades, debugging edge cases, and fixing operational problems. The trading result moved from around **+500 USDT** profit to around **-300 USDC** loss.

Not catastrophic.

But enough to make the beautiful backtest graph look less like evidence and more like something my optimism had designed in PowerPoint.

## The RPC Problem That Hurt

In the first week of July, we hit a much more painful issue.

Because of an RPC problem, one of my positions was liquidated with around **1,000 USDC** loss.

The worst part was not only the loss.

The leader position was actually profitable — almost **2,500 USDC**.

That sentence hurt.

The leader was right. The opportunity existed. The strategy signal was not the main problem.

Our system failed around execution reliability, infrastructure, and state handling.

The leader made money.

We got liquidated.

That taught me more than any clean technical document could.

Copy trading is not copy-paste trading. Even if the leader wins, the follower can lose. Timing matters. RPC reliability matters. State consistency matters. Execution logic matters. Monitoring matters. Infrastructure is not a background detail; it is part of the strategy.

A profitable signal can still bleed through a small operational crack.

After that liquidation, the collateral dropped to around **3,500 USDC**.

I was worried. Not destroyed, but definitely worried.

The dream had not died, but it had received its first real punch.

Then Hiroshi invested another **5,000 USDC** into the system.

That gave us room to continue, but it also made the responsibility heavier. It was no longer only my capital. My brother had joined the risk with me.

That changes the way you look at every bug.

## The Recovery That Still Was Not Enough

About two weeks later, the system recovered.

The account grew to around **11,000 USDC**.

On paper, that sounds fine. We started with my 5,000 USDC, took damage, added Hiroshi’s 5,000 USDC, and recovered above the combined capital.

A normal person might say:

**“That seems okay.”**

But we were not satisfied.

The result was too different from the backtest. The backtest had made us imagine something cleaner, stronger, and smoother. Real execution was not like that. It was noisy, operationally demanding, and full of small problems that did not appear in the historical curve.

The system could recover, yes.

The concept was still alive, yes.

But the gap between the backtest and real trading was too large to ignore.

That was when the question changed.

We stopped asking:

**“How do we make more profit?”**

And started asking:

**“Why is reality behaving so differently from the backtest?”**

That question was much more useful.

Unfortunately, useful questions are not always the fun ones.

## The Recent Backtest Problem

To understand the gap, we ran the backtest again, this time focusing on the recent period from **May 2025 to July 2025**.

The result was not good.

That mattered because it meant the problem was not only our execution bugs. The recent market itself had changed. The strategy that looked strong across the broader historical period was not performing well in the current window.

That was uncomfortable, but important.

A backtest can look excellent when the historical conditions support the strategy. But if the current market regime changes, old strength can become irrelevant quickly.

After digging deeper, we reached a major conclusion:

**Gains Network alone did not have enough strong trader behavior anymore for the strategy we wanted.**

Our hypothesis was that Hyperliquid had absorbed many active, high-quality traders. The trader universe on our main platform was no longer rich enough.

That was a big realization.

The issue was not only our code. It was not only our parameters. It was not only RPC reliability.

It was also market structure.

If the platform no longer has enough strong traders, even a well-built copy trading system has less to work with.

A fishing boat cannot fix an empty lake.

It can have a better engine, better nets, better dashboards, and a founder checking logs at midnight with heroic commitment. But if the fish moved, the boat has to move too.

That was when we decided LuckyPlans could not depend only on Gains Network.

We needed to expand.

GMX.

Avantis.

Jupiter Perps.

And probably more later.

## Multi-Platform Support Sounds Nice Until It Sends the Invoice

At first, adding more perp DEX platforms sounded like an integration problem.

Different contracts. Different events. Different position models. Hard, but manageable.

Then the details arrived.

Free RPC and paid RPC were completely different worlds. Reliability mattered. Latency mattered. Data availability mattered. Infrastructure cost started becoming part of the strategy, not just an engineering expense.

Every platform also had its own personality.

Gains Network had one structure. GMX had a different model. Avantis had its own flow. Jupiter Perps looked interesting, but Solana was not the same world as EVM. The data model was different, the tooling was different, and the infrastructure requirements were more expensive.

“Multi-platform support” looks beautiful on a roadmap.

In practice, every protocol brings its own homework, edge cases, and invoice.

Especially the invoice.

## Many Small Wins, But Not the Dream

From May to August, we still made real progress.

We found edges. We fixed bugs. We improved vault logic. We learned more about RPC reliability. We understood platform differences better. We adjusted strategy parameters. We expanded our thinking beyond one protocol. We had real trades, real recovery, and real lessons.

But it was not the dream from the backtest.

The dream was smooth.

Reality was logs, alerts, server checks, infrastructure decisions, manual fixes, unexpected failures, and uncomfortable questions.

That period taught me one of the most important lessons in the entire LuckyPlans journey:

**Building a great system and executing profitable trades are different games.**

A great system can collect data. It can generate plans. It can execute trades. But profitability depends on far more than software.

It depends on execution quality, infrastructure reliability, trader availability, platform structure, market regime, data freshness, costs, timing, and discipline.

The system had improved.

But the market had started teaching.

And the market is a very expensive teacher with no office hours.

## The Lesson

By the end of this period, LuckyPlans was stronger.

I was also less naive.

The backtest gave me confidence. Mainnet gave me questions. Real money exposed problems that testnet could not. RPC reliability became part of trading performance. One liquidation taught me that infrastructure bugs can erase a good signal. A recent-period backtest showed that historical strength does not guarantee current performance. Platform concentration showed that one DEX might not provide enough trader quality forever.

I do not see this period as a failure.

I see it as a reality upgrade.

LuckyPlans was no longer living only inside assumptions. It had touched the real world, and the real world had started giving feedback.

Not politely.

But clearly.

The dream became less simple, and that was necessary.

Because great systems do not automatically make great trades.

The system can be well designed, the code can be clean, the backtest can be beautiful, and the execution can still fail if reality finds the weak point first.

This was the phase where I learned that trading software does not become serious when it works.

It becomes serious when the market starts testing everything the code forgot to fear.
