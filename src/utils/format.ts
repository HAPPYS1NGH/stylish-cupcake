// utils/formatNumber.ts

export const formatNumber = (value: number): string => {
    if (value === 0) return '0';

    const suffixes = ['K', 'M', 'B', 'T'];
    const tier = Math.log10(Math.abs(value)) / 3 | 0; // Determines the suffix to use
    const suffix = suffixes[tier - 1] || ''; // Get the suffix based on the tier
    const scale = Math.pow(10, tier * 3); // Scale factor

    const scaled = value / scale; // Scale the number
    const formatted = scaled.toFixed(3); // Format the number to 3 decimal places

    return `${formatted}${suffix}`;
};
