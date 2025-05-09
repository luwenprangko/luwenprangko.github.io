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
				xmlns="http://www.w3.org/2000/svg"
				width="26.95"
				height="24"
				viewBox="0 0 256 228"
			>
				<path
					fill="#00d8ff"
					d="M210.483 73.824a172 172 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171 171 0 0 0-6.375 5.848a156 156 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a171 171 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a146 146 0 0 0 6.921 2.165a168 168 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a146 146 0 0 0 5.342-4.923a168 168 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145 145 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844m-6.365 70.984q-2.102.694-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14m-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a157 157 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345q.785 3.162 1.386 6.193M87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a157 157 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a135 135 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94M50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a135 135 0 0 1-6.318-1.979m12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144 144 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160 160 0 0 1-1.76-7.887m110.427 27.268a348 348 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381 381 0 0 0-7.365-13.322m-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322 322 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18M82.802 87.83a323 323 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a322 322 0 0 0-7.848 12.897m8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321 321 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147m37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486m52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382 382 0 0 0 7.859-13.026a347 347 0 0 0 7.425-13.565m-16.898 8.101a359 359 0 0 1-12.281 19.815a329 329 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310 310 0 0 1-12.513-19.846h.001a307 307 0 0 1-10.923-20.627a310 310 0 0 1 10.89-20.637l-.001.001a307 307 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329 329 0 0 1 12.335 19.695a359 359 0 0 1 11.036 20.54a330 330 0 0 1-11 20.722m22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026q-.518 2.504-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a161 161 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3M128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86"
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
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 256 256"
			>
				<defs>
					<linearGradient
						id="logosNextjsIcon0"
						x1="55.633%"
						x2="83.228%"
						y1="56.385%"
						y2="96.08%"
					>
						<stop offset="0%" stopColor="#fff" />
						<stop offset="100%" stopColor="#fff" stopOpacity="0" />
					</linearGradient>
					<linearGradient
						id="logosNextjsIcon1"
						x1="50%"
						x2="49.953%"
						y1="0%"
						y2="73.438%"
					>
						<stop offset="0%" stopColor="#fff" />
						<stop offset="100%" stopColor="#fff" stopOpacity="0" />
					</linearGradient>
					<circle id="logosNextjsIcon2" cx="128" cy="128" r="128" />
				</defs>
				<mask id="logosNextjsIcon3" fill="#fff">
					<use href="#logosNextjsIcon2" />
				</mask>
				<g mask="url(#logosNextjsIcon3)">
					<circle cx="128" cy="128" r="128" />
					<path
						fill="url(#logosNextjsIcon0)"
						d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128 128 0 0 0 13.524-10.418"
					/>
					<path
						fill="url(#logosNextjsIcon1)"
						d="M163.556 76.8h17.067v102.4h-17.067z"
					/>
				</g>
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
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 256 256"
			>
				<path
					fill="#3178c6"
					d="M128 0c70.692 0 128 57.308 128 128s-57.308 128-128 128S0 198.692 0 128S57.308 0 128 0"
				/>
				<path
					fill="#fff"
					d="M140.463 160.712v25.03q6.025 3.13 14.25 4.694q8.226 1.564 17.34 1.564q8.882 0 16.876-1.721q7.994-1.72 14.018-5.671q6.024-3.95 9.539-10.325T216 158.522q0-6.805-2.008-11.929a27.9 27.9 0 0 0-5.793-9.112q-3.785-3.99-9.075-7.157q-5.29-3.168-11.933-5.984q-4.866-2.034-8.728-3.95q-3.86-1.916-6.565-3.911q-2.703-1.995-4.17-4.224t-1.468-5.045q0-2.581 1.313-4.654q1.314-2.073 3.707-3.56q2.395-1.486 5.87-2.307q3.476-.82 7.724-.821q3.09 0 6.526.47q3.438.468 6.913 1.446a48 48 0 0 1 6.758 2.464a37 37 0 0 1 6.063 3.442V80.302q-5.638-2.19-12.319-3.246Q192.135 76 183.484 76q-8.805 0-16.683 1.916q-7.878 1.917-13.864 5.984t-9.461 10.364T140 109.322q0 11.185 6.372 19.085t19.348 13.376a260 260 0 0 1 9.5 4.146q4.401 2.033 7.607 4.223q3.205 2.191 5.059 4.772t1.854 5.866a9.06 9.06 0 0 1-1.159 4.498q-1.158 2.073-3.514 3.598t-5.87 2.386q-3.515.86-8.225.86q-8.033 0-15.911-2.855t-14.598-8.565m-42.752-62.17H130V78H40v20.541h32.132V190H97.71z"
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
