Blog 2 — From Copy Trading to Strategy Building: The Backtest That Fees Destroyed
Time period

November 2025 – March 2026

Main content

This blog should be the technical recovery chapter.

After realizing that copying leaders was not enough, you started researching trading strategies more deeply.

You studied:

Trend following
Mean reversion
Range trading
Grid-style behavior
Market regimes
Trader behavior patterns

Then you used your LuckyPlans leaderboard to analyze traders from a new perspective.

Instead of asking:

“Who made money?”

You started asking:

“How did they make money?”

That changed everything.

You saw that some traders behaved like trend followers. Some looked like range traders. Some used mean reversion. Some performed well only in certain market conditions.

So you decided to build your own algo trading bot, separate from the copy trading bot but still under the LuckyPlans journey.

After around two months, you completed:

A new backtest system
A composable strategy model
Replaceable strategy components
A flexible structure for testing different strategies

At first, you manually guessed strategy structures, but that was too slow.

Then you tried grid search, but the search space was too large.

Then you found Optuna.

Optuna made strategy optimization much smarter. It could search parameter ranges automatically and find strong candidates.

After about one week, Optuna found a strategy that looked great in backtesting.

But this time, you were more careful.

You checked the result again and realized the backtest was missing important real-world trading costs:

Fees
Spread
Slippage
Execution friction

After adding those models, the “profitable” strategy was no longer profitable.

That was painful, but also a sign of growth.

In Part 3, a beautiful backtest made you execute too quickly.
In Part 4, a beautiful backtest made you suspicious.

Then Optuna found another strong strategy even with fees included. But you kept researching and learned another problem:

Optuna is powerful enough to find historical noise.

That means it can discover patterns that looked amazing in the past but may not survive the future.

So you tested forward-based validation with different windows.

The strategy failed.

You marked it as noise.

This blog should show that you were becoming more mature as a builder and operator. You were no longer asking the backtest to make you excited. You were asking it to survive harder questions.

Core lesson

A strategy is not real just because the backtest looks good.

It has to survive fees, spread, slippage, forward validation, and changing market conditions.

Suggested ending

“This time, I did not lose money to the backtest. I let the backtest lose the argument first.”
