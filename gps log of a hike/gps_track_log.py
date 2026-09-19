import pandas as pd
import plotly.express as px
import plotly.graph_objects as go

# Read the CSV file containing the GPS data
gps_data = pd.read_csv("new_trek.csv", index_col=False)

# Create the base map showing the hiking route using latitude and longitude
fig = px.line_map(
    gps_data,
    lat="latitude",
    lon="longitude",
    hover_data=["time"],
    height=800,
    width=1200,
    zoom=14.3,
    title=f"GPS Log of a Hike"
)

# Change the map style to a satellite view
fig.update_layout(map_style="satellite-streets")

# Customize the appearance of the route line
fig.update_traces(
    name="Hiking Route",
    line_width=1,
    line_color="gold",
    showlegend=True
)

# Add checkpoint markers along the route (every 40 points)
fig.add_trace(go.Scattermap(
    lat=gps_data.latitude[::40],
    lon=gps_data.longitude[::40],
    mode="markers",
    marker=dict(size=8, color="gold"),
    name="Checkpoints"
))

# Add a marker showing the starting location and time
fig.add_trace(go.Scattermap(
    lat=[gps_data.latitude.iloc[0]],
    lon=[gps_data.longitude.iloc[0]],
    mode="markers+text",
    marker=dict(size=12, color="green"),
    text=[f"Start {gps_data.time.iloc[0]}"],
    textposition="middle right",
    textfont_size=14,
    textfont_color="white",
    textfont_weight="bold",
    name="Start"
))

# Add a marker showing the ending location and time
fig.add_trace(go.Scattermap(
    lat=[gps_data.latitude.iloc[-1]],
    lon=[gps_data.longitude.iloc[-1]],
    mode="markers+text",
    marker=dict(size=12, color="red"),
    text=[f"End {gps_data.time.iloc[-1]}"],
    textposition="middle right",
    textfont_size=14,
    textfont_color="white",
    textfont_weight="bold",
    name="End"
))

# Display the interactive map
fig.show()