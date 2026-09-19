import pandas as pd
import matplotlib.pyplot as plt

# leer bien el csv
gps_data = pd.read_csv("new_trek.csv", index_col=False)

# cargar imagen
map_img = plt.imread("map.png")

# prueba este bbox manual
map_bbox = (-81.7010, -81.6888, 28.6232, 28.6282)

fig, ax = plt.subplots(figsize=(10, 8))

# mostrar mapa
ax.imshow(map_img, extent=map_bbox, aspect='auto')

# dibujar ruta
ax.plot(gps_data["longitude"], gps_data["latitude"], color="red", linewidth=2)

ax.set_xlim(map_bbox[0], map_bbox[1])
ax.set_ylim(map_bbox[2], map_bbox[3])

ax.set_title("Hiking GPS Track")
ax.set_xlabel("Longitude")
ax.set_ylabel("Latitude")
ax.ticklabel_format(style='plain', useOffset=False)

plt.show()