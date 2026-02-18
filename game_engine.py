from concept_analyzer import analyze_concept

def build_game(subject, concept, difficulty):
    return {
        "game_type": "quiz",
        "questions": [
            {
                "question": f"What best explains {concept}?",
                "options": [
                    "It describes a basic scientific principle",
                    "It is a random fact",
                    "It has no real-world use",
                    "It is only theoretical"
                ],
                "answer": "It describes a basic scientific principle"
            },
            {
                "question": f"Where is {concept} commonly applied?",
                "options": [
                    "Daily life",
                    "Only in laboratories",
                    "Only in textbooks",
                    "Nowhere"
                ],
                "answer": "Daily life"
            }
        ]
    }
