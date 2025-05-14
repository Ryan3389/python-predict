from sklearn.metrics.pairwise import cosine_similarity
import pandas as pd
import os
from dotenv import load_dotenv
load_dotenv()

stats_file = os.getenv("BASEBALL_STATS_FILE")

df = pd.read_csv(stats_file, encoding="latin-1")
hof_players = df[df["HOF"] == 1]

hof_vectors = hof_players[["YRS", "G", "H", "2B", "HR", "RBI", "BA"]].to_numpy()


