"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const techStacks = [
	{
		id: "react",
		name: "React",
		icon: (
			<svg
				viewBox="0 0 24 24"
				className="h-5 w-5"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="12" cy="12" r="2" fill="currentColor" />
				<path
					d="M12 6C14.7614 6 17.2614 6.38625 19.0733 7.05C20.7945 7.67875 22 8.64875 22 10C22 11.3512 20.7945 12.3213 19.0733 12.95C17.2614 13.6138 14.7614 14 12 14C9.23858 14 6.73858 13.6138 4.92672 12.95C3.20551 12.3213 2 11.3512 2 10C2 8.64875 3.20551 7.67875 4.92672 7.05C6.73858 6.38625 9.23858 6 12 6Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M15.5 4.20577C16.3333 5.60289 17 7.23198 17.5 9.00003C18 10.768 18.3333 12.6091 18.5 14.5232"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<path
					d="M8.5 4.20577C7.66667 5.60289 7 7.23198 6.5 9.00003C6 10.768 5.66667 12.6091 5.5 14.5232"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
			</svg>
		),
		title: "React Fundamentals",
		description:
			"I chose React as my primary UI library for its component-based architecture and vast ecosystem. Learn the core concepts of React, from components and props to hooks and state management. Build interactive UIs with the most popular frontend library.",
		tutorials: [
			{
				title: "Building Custom Hooks",
				description: "Create reusable logic with custom React hooks",
				level: "Intermediate",
			},
			{
				title: "State Management Patterns",
				description:
					"Compare useState, useReducer, Context API, and external libraries",
				level: "Advanced",
			},
			{
				title: "Performance Optimization",
				description:
					"Techniques to minimize renders and improve React app performance",
				level: "Advanced",
			},
		],
		codeSnippet: `import React, { useState, useEffect, useCallback, useMemo } from 'react';

// Custom hook for managing a counter with localStorage persistence
function useLocalStorageCounter(initialValue = 0, key = 'counter') {
  // Initialize state from localStorage or use initial value
  const [count, setCount] = useState(() => {
    if (typeof window === 'undefined') return initialValue;
    
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return initialValue;
    }
  });

  // Update localStorage when count changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(count));
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  }, [count, key]);

  // Memoized increment function
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  // Memoized decrement function
  const decrement = useCallback(() => {
    setCount(prevCount => prevCount - 1);
  }, []);

  // Memoized reset function
  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  return { count, increment, decrement, reset };
}

// Example component using the custom hook
function Counter() {
  const { count, increment, decrement, reset } = useLocalStorageCounter(0, 'my-counter');
  
  // Memoized doubled value
  const doubledCount = useMemo(() => count * 2, [count]);
  
  return (
    <div className="counter-container">
      <h2>Counter: {count}</h2>
      <p>Doubled: {doubledCount}</p>
      
      <div className="button-group">
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;`,
	},
	{
		id: "nextjs",
		name: "Next.js",
		icon: (
			<svg
				viewBox="0 0 24 24"
				className="h-5 w-5"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M11.5711 2.22061C11.7261 2.12517 11.9079 2.07495 12.0931 2.07495C12.2783 2.07495 12.4601 2.12517 12.6151 2.22061L20.4151 6.72061C20.5727 6.81783 20.7006 6.95859 20.7848 7.12616C20.8689 7.29373 20.9063 7.48159 20.8931 7.66961V16.3296C20.9063 16.5176 20.8689 16.7055 20.7848 16.8731C20.7006 17.0406 20.5727 17.1814 20.4151 17.2786L12.6151 21.7786C12.4601 21.8741 12.2783 21.9243 12.0931 21.9243C11.9079 21.9243 11.7261 21.8741 11.5711 21.7786L3.77105 17.2786C3.61343 17.1814 3.48555 17.0406 3.40141 16.8731C3.31728 16.7055 3.27989 16.5176 3.29305 16.3296V7.66961C3.27989 7.48159 3.31728 7.29373 3.40141 7.12616C3.48555 6.95859 3.61343 6.81783 3.77105 6.72061L11.5711 2.22061Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M16.5 14L7.5 5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M16.5 9V14H11.5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
		title: "Next.js App Router",
		description:
			"Next.js is my framework of choice for production applications due to its server-side rendering capabilities and excellent developer experience. Master the latest Next.js App Router for building full-stack React applications with server components, data fetching, and optimized rendering.",
		tutorials: [
			{
				title: "Server Components",
				description:
					"Leverage server components for improved performance and SEO",
				level: "Intermediate",
			},
			{
				title: "Data Fetching Strategies",
				description:
					"Learn different approaches to fetch and cache data in Next.js",
				level: "Intermediate",
			},
			{
				title: "Route Handlers & API Routes",
				description:
					"Build backend functionality directly in your Next.js application",
				level: "Advanced",
			},
		],
		codeSnippet: `// app/products/[category]/page.tsx
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import ProductGrid from '@/components/product-grid';
import ProductFilters from '@/components/product-filters';
import LoadingProductGrid from '@/components/loading-product-grid';
import { getProductsByCategory } from '@/lib/products';

// Metadata generation for SEO
export async function generateMetadata({ params }) {
  const category = params.category;
  
  // Capitalize first letter for title
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);
  
  return {
    title: \`\${formattedCategory} Products | My Store\`,
    description: \`Browse our selection of \${category} products. Find the best deals on \${category}.\`,
    openGraph: {
      images: [
        {
          url: \`/api/og?title=\${formattedCategory} Products\`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

// Generate static paths at build time
export async function generateStaticParams() {
  const categories = ['electronics', 'clothing', 'books', 'home', 'sports'];
  
  return categories.map((category) => ({
    category,
  }));
}

export default async function CategoryPage({ params }) {
  const { category } = params;
  
  // Validate the category
  const validCategories = ['electronics', 'clothing', 'books', 'home', 'sports'];
  if (!validCategories.includes(category)) {
    notFound();
  }
  
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {category.charAt(0).toUpperCase() + category.slice(1)} Products
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <ProductFilters category={category} />
        </div>
        
        <div className="lg:col-span-3">
          <Suspense fallback={<LoadingProductGrid />}>
            <ProductList category={category} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}

// This component is separated to leverage Suspense
async function ProductList({ category }) {
  // Fetch products with a 3-second revalidation
  const products = await getProductsByCategory(category, { next: { revalidate: 3 } });
  
  if (products.length === 0) {
    return <p>No products found in this category.</p>;
  }
  
  return <ProductGrid products={products} />;
}`,
	},
	{
		id: "typescript",
		name: "TypeScript",
		icon: (
			<svg
				viewBox="0 0 24 24"
				className="h-5 w-5"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M3 3H21V21H3V3Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M13 10.5V18"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M17 10.5H13H9"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M9 14.5H13"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
		title: "TypeScript Essentials",
		description:
			"I write all my JavaScript with TypeScript to catch errors early and improve code quality. Add static typing to your JavaScript projects with TypeScript. Learn how to write type-safe code, create interfaces, and leverage advanced type features.",
		tutorials: [
			{
				title: "Type Inference & Assertions",
				description:
					"Understanding how TypeScript infers types and when to use assertions",
				level: "Beginner",
			},
			{
				title: "Generics & Utility Types",
				description:
					"Master reusable code with generics and built-in utility types",
				level: "Intermediate",
			},
			{
				title: "Advanced Type Patterns",
				description:
					"Explore conditional types, mapped types, and template literal types",
				level: "Advanced",
			},
		],
		codeSnippet: `// Advanced TypeScript patterns for API response handling

// Define base response structure
type ApiResponse<T> = {
  data: T;
  status: number;
  message: string;
  timestamp: string;
};

// Define error response structure
type ApiError = {
  code: string;
  details: Record<string, unknown>;
  path?: string;
};

// User-related types
type UserRole = 'admin' | 'editor' | 'viewer' | 'guest';

interface BaseUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
}

interface AdminUser extends BaseUser {
  role: 'admin';
  permissions: Array<string>;
  accessLevel: number;
}

interface RegularUser extends BaseUser {
  role: Exclude<UserRole, 'admin'>;
  preferences: {
    theme: 'light' | 'dark' | 'system';
    notifications: boolean;
    language: string;
  };
}

// Discriminated union type
type User = AdminUser | RegularUser;

// Type guard to check if user is admin
function isAdminUser(user: User): user is AdminUser {
  return user.role === 'admin';
}

// Generic function to fetch data with proper typing
async function fetchApi<T>(
  url: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    });
    
    if (!response.ok) {
      const errorData: ApiError = await response.json();
      throw new Error(\`API Error: \${errorData.code} - \${errorData.details}\`);
    }
    
    return await response.json() as ApiResponse<T>;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

// Example usage with conditional types
type UserResponseData<T extends UserRole> = T extends 'admin' 
  ? AdminUser 
  : RegularUser;

// Utility type to extract data from API response
type ExtractData<T> = T extends ApiResponse<infer U> ? U : never;

// Example function using the types
async function getUserById<T extends UserRole>(
  id: string,
  role: T
): Promise<UserResponseData<T>> {
  const response = await fetchApi<UserResponseData<T>>(\`/api/users/\${id}?role=\${role}\`);
  return response.data;
}

// Usage example
async function handleUserData() {
  try {
    const adminUser = await getUserById('123', 'admin');
    
    // Type guard ensures adminUser is treated as AdminUser
    if (isAdminUser(adminUser)) {
      console.log(\`Admin user with access level \${adminUser.accessLevel}\`);
      
      // This is safe because of the type guard
      const permissions = adminUser.permissions.join(', ');
      console.log(\`Permissions: \${permissions}\`);
    }
    
    const editorUser = await getUserById('456', 'editor');
    console.log(\`Editor's theme preference: \${editorUser.preferences.theme}\`);
    
  } catch (error) {
    console.error('Failed to fetch user data:', error);
  }
}`,
	},
];

export default function CodeShowcase() {
	const [activeTab, setActiveTab] = useState("react");

	return (
		<section
			id="code-showcase"
			className="w-full py-12 md:py-24"
			aria-labelledby="code-showcase-heading"
		>
			<div className="container px-4 md:px-6 mx-auto max-w-6xl">
				<div className="flex flex-col items-center space-y-4 text-center mb-12">
					<div className="inline-block">
						<span className="inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-neutral-950 dark:border-neutral-800 dark:text-neutral-50">
							My Tech Stack
						</span>
					</div>
					<h2
						id="code-showcase-heading"
						className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter"
					>
						My Personal Tech Stacks
					</h2>
					<p className="text-muted-foreground max-w-[42rem]">
						These are the technologies I've chosen for my projects based on
						their performance, developer experience, and community support. I've
						created tutorials to share my knowledge and experience with these
						tools.
					</p>
				</div>

				<div className="w-full">
					<div className="flex justify-center mb-10">
						<div className="inline-flex p-1 rounded-lg bg-muted overflow-x-auto max-w-full sm:overflow-visible">
							{techStacks.map((tech) => (
								<Button
									key={tech.id}
									variant={activeTab === tech.id ? "default" : "ghost"}
									className={cn(
										"flex items-center gap-2 px-4 py-2 rounded-md transition-all",
										activeTab === tech.id
											? "shadow-sm"
											: "hover:bg-background/80 text-muted-foreground"
									)}
									onClick={() => setActiveTab(tech.id)}
								>
									<div
										className={cn(
											"flex items-center justify-center h-8 w-8 rounded-full",
											activeTab === tech.id
												? "bg-background text-primary"
												: "bg-transparent"
										)}
									>
										{tech.icon}
									</div>
									<span className="font-medium hidden sm:inline">
										{tech.name}
									</span>
								</Button>
							))}
						</div>
					</div>

					{techStacks.map((tech) => (
						<div
							key={tech.id}
							className={cn(
								"mt-0 transition-all duration-300",
								activeTab === tech.id ? "opacity-100" : "hidden opacity-0"
							)}
						>
							<div className="grid md:grid-cols-2 gap-10 items-start">
								{/* Content */}
								<div className="space-y-6">
									<h3 className="text-2xl font-bold">{tech.title}</h3>
									<p className="text-muted-foreground">{tech.description}</p>

									<div className="space-y-4">
										<h4 className="font-medium">
											Popular Tutorials I've Created
										</h4>
										<ul className="space-y-4">
											{tech.tutorials.map((tutorial, index) => (
												<li
													key={index}
													className="border rounded-lg p-4 hover:border-primary/50 transition-colors"
												>
													<div className="flex justify-between items-start">
														<h5 className="font-medium">{tutorial.title}</h5>
														<Badge variant="outline" className="ml-2">
															{tutorial.level}
														</Badge>
													</div>
													<p className="text-sm text-muted-foreground mt-1">
														{tutorial.description}
													</p>
												</li>
											))}
										</ul>
									</div>

									<Button className="mt-4 group">
										View all tutorials
										<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
									</Button>
								</div>

								{/* Code Example with fixed height and scrolling */}
								<div className="border rounded-lg shadow-sm overflow-hidden">
									<div className="bg-muted px-4 py-2 border-b flex items-center justify-between">
										<div className="flex items-center space-x-2">
											{tech.icon}
											<span className="font-medium text-sm">
												{tech.name} Example
											</span>
										</div>
										<div className="flex space-x-1">
											<div className="h-3 w-3 rounded-full bg-red-500" />
											<div className="h-3 w-3 rounded-full bg-yellow-500" />
											<div className="h-3 w-3 rounded-full bg-green-500" />
										</div>
									</div>
									<pre className="bg-zinc-950 text-zinc-100 p-4 overflow-y-auto h-[350px] text-sm">
										<code>{tech.codeSnippet}</code>
									</pre>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
