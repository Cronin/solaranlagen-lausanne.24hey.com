#!/bin/bash
echo "=================================================================="
echo "VERIFYING ALL SWISS SOLAR PANEL GOOGLE VERIFICATION TXT RECORDS"
echo "=================================================================="
echo ""

SITES=(
    "solaranlagen-zurich"
    "solaranlagen-aargau"
    "solaranlagen-luzern"
    "solaranlagen-basel"
    "solaranlagen-bern"
    "solaranlagen-stgallen"
    "solaranlagen-winterthur"
    "solaranlagen-zug"
    "solaranlagen-geneve"
    "solaranlagen-lausanne"
)

SUCCESS=0
TOTAL=${#SITES[@]}

for site in "${SITES[@]}"; do
    echo -n "Checking $site.24hey.com... "
    RESULT=$(dig TXT $site.24hey.com @1.1.1.1 +short | grep google-site-verification)
    
    if [ ! -z "$RESULT" ]; then
        echo "✅ VERIFIED"
        echo "   $RESULT"
        ((SUCCESS++))
    else
        echo "❌ NOT FOUND"
    fi
    echo ""
done

echo "=================================================================="
echo "RESULTS: $SUCCESS/$TOTAL TXT records verified"
echo "=================================================================="

if [ $SUCCESS -eq $TOTAL ]; then
    echo "✅ ALL VERIFICATIONS SUCCESSFUL!"
    exit 0
else
    echo "⚠️  Some verifications missing"
    exit 1
fi
