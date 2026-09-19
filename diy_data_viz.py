import pandas as pd
import plotly.graph_objects as go
from plotly.subplots import make_subplots

df = pd.read_csv("colors_cars_type.csv")

df["total"] = df["cars"] + df["suvs"] + df["pickups"] + df["motorcycle"]

cars_total = df["cars"].sum()
suvs_total = df["suvs"].sum()
pickups_total = df["pickups"].sum()
motos_total = df["motorcycle"].sum()

fig = make_subplots(
    rows=2, cols=3,
    subplot_titles=[
        f"🚗 Cars (total {cars_total})",
        f"🚙 SUVs (total {suvs_total})",
        "",
        f"🛻 Pickups (total {pickups_total})",
        f"🏍️ Motorcycles (total {motos_total})",
        f"Total by Color"
    ],
    specs=[
        [{'type': 'domain'}, {'type': 'domain'}, {'type': 'domain'}],
        [{'type': 'domain'}, {'type': 'domain'}, {'type': 'xy'}]
    ]
)

# Cars pie chart
df_cars = df[df["cars"] > 0]
fig.add_trace(go.Pie(
    labels=df_cars["colors"], values=df_cars["cars"],
    hole=0.5, marker_colors=df_cars["colors"], name="Cars"
), row=1, col=1)

# SUVs pie chart
df_suvs = df[df["suvs"] > 0]
fig.add_trace(go.Pie(
    labels=df_suvs["colors"], values=df_suvs["suvs"],
    hole=0.5, marker_colors=df_suvs["colors"], name="SUVs"
), row=1, col=2)

# Pickups pie chart
df_pickups = df[df["pickups"] > 0]
fig.add_trace(go.Pie(
    labels=df_pickups["colors"], values=df_pickups["pickups"],
    hole=0.5, marker_colors=df_pickups["colors"], name="Pickups"
), row=2, col=1)

# Motorcycles pie chart
df_motorcycles = df[df["motorcycle"] > 0]
fig.add_trace(go.Pie(
    labels=df_motorcycles["colors"], values=df_motorcycles["motorcycle"],
    hole=0.5, marker_colors=df_motorcycles["colors"], name="Motorcycles"
), row=2, col=2)

# Bubble chart total by color
fig.add_trace(go.Scatter(
    x=df["colors"], y=df["total"],
    marker=dict(
        size=df["total"] * 20,
        color=df["colors"],
        sizemode="area"
    ),
    text=df["total"],
    textposition="middle right",
    mode="markers+text",
    showlegend=False
), row=2, col=3)

fig.update_xaxes(gridcolor="rgba(255, 255, 255, 0.1)")
fig.update_yaxes(gridcolor="rgba(255, 255, 255, 0.1)")

# Text annotation
total_vehicles = df["total"].sum()
fig.add_annotation(
    text=(
        f"<b>About this data</b><br><br>"
        f"Data was collected from the parking lot<br>"
        f"at my workplace during a single visit.<br><br>"
        f"A total of <b>{total_vehicles} vehicles</b> were observed.<br>"
        f"That day had fewer employees than usual —<br>"
        f"<b>more than 20 parking spots</b> were empty.<br><br>"
        f"The most common brand spotted<br>"
        f"was <b>Toyota</b>, which reflects the<br>"
        f"workplace demographic — most of<br>"
        f"our employees are <b>Latino</b>, a community<br>"
        f"known for a strong preference<br>"
        f"for Toyota vehicles.<br><br>"
        f"<b>Gray</b> was the most popular color<br>"
        f"across all vehicle types."
    ),
    x=0.95, y=1,
    xref="paper", yref="paper",
    showarrow=False,
    align="left",
    font=dict(size=12, color="white"),
    bordercolor="gray",
    borderwidth=1,
    borderpad=30,
    bgcolor="rgb(40, 40, 40)"
)

fig.update_layout(
    title_text="Vehicle Distribution by Type and Color",
    title_x=0.5,
    title_font=dict(size=24),
    font=dict(color="white"),
    paper_bgcolor="rgb(20, 20, 20)",
    plot_bgcolor="rgb(20, 20, 20)",
    showlegend=True
)

#fig.write_image("vehicles.png")
fig.show()