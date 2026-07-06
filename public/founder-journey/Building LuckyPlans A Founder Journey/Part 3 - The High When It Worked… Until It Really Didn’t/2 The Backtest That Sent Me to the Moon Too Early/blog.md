# The Backtest That Sent Me to the Moon Too Early

After the Hong Kong conversations, the next step became obvious.

LuckyPlans had a working MVP, but it did not yet have evidence strong enough for serious people to trust.

The system could watch on-chain events, manage bots, organize plans, and open copied positions on testnet. From an engineering perspective, that mattered. But traders and finance people were asking a different class of questions.

What is the ROI?

Where is the backtest?

What is the strategy?

Why should anyone trust this with capital?

Those questions were uncomfortable because they were correct.

My first instinct was the usual engineer reflex: improve the product. Better UI, cleaner flows, stronger architecture, more features. Basically, when in doubt, build more software and hope the market becomes impressed by your folder structure.

Hiroshi had a better idea.

He suggested we stop polishing the system and focus on backtesting first.

That was the right call. LuckyPlans already had enough raw material. The event logs were there. The leaderboard data was there. The system had collected enough on-chain history to start asking a more important question:

Could LuckyPlans prove anything from the data?

Not someday.

Now.

## From Manual Judgment to Automated Discovery

Until that point, LuckyPlans still depended too much on manual analysis.

The flow was understandable: look at traders, inspect their profiles, choose candidates, create a plan, and run bots. It worked as a founder’s internal workflow, but it was not scalable. If every promising trader required me to personally inspect the history, compare the behavior, and decide whether they deserved a plan, LuckyPlans would become my private trading notebook with better branding.

Useful, maybe.

But not a product.

The next idea was more ambitious: LuckyPlans should not only help users copy traders. It should help discover plans.

That changed the product direction.

Instead of asking users to look at a leaderboard and guess, the system should analyze historical behavior, score candidates, test assumptions, and generate plan ideas based on evidence.

That was the shift from manual decision-making to backtest-driven automation.

It also created a more serious version of the product. LuckyPlans was no longer only asking:

**“Who should I copy?”**

It was starting to ask:

**“What can the data actually support?”**

That question is less exciting at first, but much more useful once money enters the room and starts making everyone nervous.

## The Linear Growth Hypothesis

Hiroshi asked a simple question that helped us find the first scoring model:

**“How did the original idea start?”**

The answer was easy.

I had seen one trader with an unusually strong profile. But what caught my attention was not only the final profit number. It was the shape of the PnL curve. The graph looked like steady progress, not one lucky vertical candle pretending to be talent.

That gave us the first hypothesis:

Could LuckyPlans automatically detect traders whose PnL grows in a steady, linear way?

We explored a few approaches and landed on a simple, practical first model: **linear regression**.

The goal was not to predict the future. That would have been too ambitious, and also the kind of statement that makes serious traders slowly close the meeting window.

The goal was more modest: identify traders whose historical PnL looked consistent enough to study further.

Linear regression gave us two useful signals.

**Slope** measured the direction and speed of growth. If the slope was strongly positive, the trader’s account was increasing over time.

**R²** measured how closely the actual PnL curve followed the regression line. A high R² suggested steadier growth. A low R² suggested noise, instability, or performance driven by a few lucky trades.

Neither metric was perfect. But together, they created a practical filter.

A trader with strong slope and weak R² might be profitable but unstable. A trader with strong R² and weak slope might be consistent but not very useful. A trader with both became interesting enough for deeper testing.

That was the first moment automatic candidate discovery felt real.

LuckyPlans was no longer only showing traders.

It was starting to ask the system:

**“Can you find more traders like the one that started this whole idea?”**

## The Backtest Engine Was Too Slow

Once the scoring idea was ready, we started building the backtest system.

I wanted the first results to look amazing immediately.

Reality, as usual, preferred comedy.

The early results were mixed. Some were boring, some were confusing, and some looked promising until a small parameter change removed all the magic. That was not failure. That was the beginning of actual research.

The bigger problem was speed.

One strategy parameter set took almost **one hour** to test.

We were processing around **two years of event logs across four chains**, so the workload was not small. Still, one hour per experiment made strategy optimization feel less like engineering and more like agriculture.

Plant one parameter.

Wait.

Pray.

Harvest disappointment.

We split the work. Hiroshi focused on testing strategy parameters and searching for stronger combinations. I focused on making the backtest engine fast enough that experimentation would not require monk-level patience.

That speed work became its own technical battle.

## The Optimization Breakthrough

The first version of the backtest processed historical data in a natural way: day by day, event by event. That approach made sense because it mirrored how time moves.

Unfortunately, “how time moves” is not always how software should move.

For leaderboard snapshots, daily processing worked well. But for trader scoring and automated plan generation, it created too much unnecessary complexity. The system needed to evaluate trader behavior across periods, compare candidates, and simulate how plans would have been selected.

So I changed the perspective.

Instead of filling the backtest day by day, I started processing it trader by trader.

Pick one trader.
Evaluate that trader across the period.
Fill the required historical values.
Move to the next trader.

The improvement was dramatic.

A single strategy backtest dropped from almost **one hour** to around **five minutes**.

That was not a small optimization. That was an unlock.

Suddenly, parameter testing became possible. Not instant, not perfect, but realistic enough to support iteration. The work took about a week plus two weekends, but it changed the pace of the whole project.

It was one of those engineering moments where the solution was not “make the code faster.”

It was:

**“Stop forcing the problem through the wrong shape.”**

## The Result That Looked Too Good

While I worked on speed, Hiroshi kept exploring parameter combinations.

The first phase was mostly noise. Then the results started improving. Eventually, we found one that made both of us stop and stare.

The backtest showed around **200% profit per month**.

The curve looked smooth. The drawdown looked manageable. The logic looked reasonable. And the result came from real historical event data, not imagination.

That was the dangerous part.

When a result only exists in your head, you know it is a dream. But when your own system processes real historical data and prints a beautiful curve, the dream walks into the room wearing a suit and starts talking like a business plan.

For a moment, it felt like the breakthrough we had been waiting for.

The Hong Kong conversations had made one thing clear: we needed evidence.

Now we had something that looked like evidence.

Maybe too much like evidence.

That result changed the emotional temperature of the project immediately.

## The Moon Phase

This was the moment my confidence jumped.

Not a little.

A lot.

I started thinking: maybe this is it. Maybe this is the result we needed. Maybe LuckyPlans had moved from interesting infrastructure to something that could actually generate serious returns.

And yes, the millionaire thought appeared.

I am not proud of how quickly it arrived, but it arrived with confidence and probably without knocking.

At that time, it did not feel ridiculous. The result was there. The graph was smooth. The model had logic. The system was built on real data. It felt possible.

Not guaranteed.

Not easy.

But possible.

That night, sleeping became difficult. My brain kept running through scenarios: execute quietly, prove it ourselves, refine the system, show results later, maybe build the company around this.

We decided not to rush back to investors or make the result public.

Partly because it was too early.

Partly because we wanted to test it ourselves first.

And partly because we were probably too excited to talk safely.

Sometimes the most dangerous moment is not when you have no proof.

It is when you have just enough proof to become overconfident.

## LuckyPlans Became Bigger Than Copy Trading

That backtest changed how I saw the product.

Before this stage, LuckyPlans was mostly a system that could follow traders.

After this stage, it started to feel like a system that could discover plans.

That was a major shift.

The product was no longer only:

**“Here are traders. Choose one and copy.”**

It was becoming:

**“Here is historical data. Here is a scoring model. Here is a backtest engine. Here is a plan generated from tested behavior.”**

That felt much stronger.

Copy trading was still part of the product, but it was no longer the whole idea. The deeper opportunity was building a system that could analyze trader behavior, find patterns, test assumptions, and suggest structured plans before execution.

That direction felt more original.

More powerful.

Also more dangerous, because it made the product feel closer to truth than it really was.

## The Hidden Risk

Looking back, this was one of the happiest moments in the LuckyPlans journey.

It was also one of the most dangerous.

A beautiful backtest has a strange power over builders. It rewards months of work. It makes the system feel smart. It gives shape to the dream. It turns effort into a curve, and if the curve is smooth enough, your judgment starts dressing up as confidence.

I understood logically that a backtest was still only a backtest.

But emotionally, I was already halfway to the moon.

That is why this moment became so important in the story. It gave LuckyPlans a smarter product direction. It proved that backtest-driven discovery could become a foundation. It showed that the system could do more than copy trades.

But it also taught me how quickly evidence can become excitement.

And how quickly excitement can become belief.

At that moment, I thought LuckyPlans had found the breakthrough.

Maybe it had.

But not in the way I believed yet.

The backtest did not prove that we were ready to execute. It proved that LuckyPlans had become powerful enough to create a much more serious question.

Could the result survive reality?

At the time, I was too excited to ask that question properly.

I was looking at the graph, imagining the next chapter, and yes — probably standing a little too close to the moon.
